import _ from 'lodash';
import { startsWith } from 'lodash/fp';
import t from 'tcomb';
import pathToRegexp from 'path-to-regexp';

import { Component } from './types';

/**
 * Creates a single route parser given a path (ex /some/:named/:path*)
 * The return exec method returns an object of all named parameters
 *
 * Returned exec() method takes a url string and returns an object with route params
 *
 * @param {Regex} path
 * @returns {Object} with exec() method to match against strings
 */
function routeParser (path) {
  const keys = [];
  const re = pathToRegexp(path, keys);

  return {
    exec (str) {
      const matches = re.exec(str);
      if (!matches) return null;

      return _.reduce(_.tail(matches), (obj, match, i) => {
        if (!match) return obj;

        obj[keys[i].name] = match;
        return obj;
      }, {});
    }
  };
}

/**
 * Takes multiple route definitions and returns a single
 * parse function to match against all the definitions
 * Example of a definition: {
 *   SomeRoute: [Component, '/some/:named/:path*']
 * }
 * @param {Object} definitions
 * @returns {Function} parser
 */
function routeMapper (definitions) {
  const parsers = _.map(definitions, function definitionsToParser (def, name) {
    const parser = routeParser(def[1]);
    return function exec (str) {
      const params = parser.exec(str);
      if (!params) return null;
      return { name, params };
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

/**
 * Main router function; takes a set of route definitions and
 * returns a relm component which utilizies those routes
 * Example of a definition: {
 *   SomeRoute: [Component, '/some/:named/:path*']
 * }
 * @param {Object} routeDefinitions
 * @returns {Object} component
 */
export default function router (routeDefinitions) {
  if (process.env.NODE_ENV !== 'production') {
    const Path = t.refinement(t.String, startsWith('/'), 'Path');

    const RouteWithoutOptions = t.tuple([Component, Path], '-');
    const RouteWithOptions = t.tuple([Component, Path, t.Boolean], '-');

    const RouteDefinition = t.union([
      RouteWithoutOptions,
      RouteWithOptions
    ], 'Route');

    RouteDefinition.dispatch = x => (x.length > 2 ? RouteWithOptions : RouteWithoutOptions);

    t.dict(t.String, RouteDefinition, 'Routes')(routeDefinitions);
  }

  const parseRoute = routeMapper(routeDefinitions);

  function Router (html, params) {
    const { props, children, components } = params;

    const url = props.url || '';
    const prefixedUrl = _.startsWith(url, '/') ? url : `/${url}`;
    const route = parseRoute(prefixedUrl);
    if (!route) return null;

    const child = components[route.name];
    const childProps = _.assign(props, route.params);

    return child(childProps, children);
  }

  Router.components = _.mapValues(routeDefinitions, def => def[0]);

  return Router;
}

export const internals = {
  routeParser,
  routeMapper,
};
