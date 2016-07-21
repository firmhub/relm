import _ from 'lodash';
import { startsWith } from 'lodash/fp';
import t from 'tcomb';
import pathToRegexp from 'path-to-regexp';

import { Component } from './types';

export function routeParser (path) {
  const keys = [];
  const re = pathToRegexp(path, keys);

  return {
    exec (str) {
      const matches = re.exec(str);
      if (!matches) return null;

      return _.reduce(_.tail(matches), (obj, match, i) => {
        if (match) obj[keys[i].name] = match;
        return obj;
      }, {});
    }
  };
}

export function routeMapper (definitions) {
  const parsers = _.map(definitions, function definitionsToParser (def, name) {
    const parser = routeParser(def[1]);
    return function exec (url) {
      const params = parser.exec(url);
      if (!params) return null;
      return { name, url, params };
    };
  });

  return function parser (str) {
    for (const parse of parsers) {
      const result = parse(str);
      if (result) return result;
    }
    return null;
  };
}

export function router (routeDefinitions) {
  if (process.env.NODE_ENV !== 'production') {
    const Path = t.refinement(t.String, startsWith('/'), 'Path');

    const RouteWithoutOptions = t.tuple([Component, Path]);
    const RouteWithOptions = t.tuple([Component, Path, t.Boolean]);

    const RouteDefinition = t.union([
      RouteWithoutOptions,
      RouteWithOptions
    ], 'RouteDefinition');

    RouteDefinition.dispatch = x => (x.length > 2 ? RouteWithOptions : RouteWithoutOptions); 

    t.dict(t.String, RouteDefinition)(routeDefinitions);
  }

  const parseRoute = routeMapper(routeDefinitions);

  function Router (html, params) {
    const { props, children, components } = params;

    const route = parseRoute(props.url);
    if (!route) return null;

    const child = components[route.name];
    const childProps = _.assign(props, route.params);

    return child(childProps, children);
  }

  Router.components = _.mapValues(routeDefinitions, def => def[0]);

  return Router;
}

export default router;
