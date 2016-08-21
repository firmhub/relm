/* eslint-disable */
import postcss from 'postcss';
import safe from 'postcss-safe-parser';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import jsxSyntax from 'babel-plugin-syntax-jsx';
import jsxTransform from 'babel-plugin-transform-react-jsx';

export default {
  presets: [],
  plugins: [
    [jsxSyntax],
    [jsxTransform, { pragma: 'h' }],
  ],
  env: {
    production: {
      plugins: [
        [csjs, {
          plugins: [
            [autoprefixer, { browsers: ['last 2 versions'] }],
            [csso]
          ]
        }]
      ]
    }
  }
};

function csjs ({ types: t }) {
  return {
    visitor: {
      TaggedTemplateExpression: function(path, state) {
        if (path.node.tag.name !== 'css') {                 /* monkey_patch */
          return false;
        }

        const nodeQuasis = path.node.quasi.quasis;
        const nodeExprs = path.node.quasi.expressions;

        const css = nodeQuasis.reduce((acc, quasi, i) => {
          const expr = nodeExprs[i] ? expressionPlaceholder(i) : '';
          return acc + quasi.value.raw + expr;
        }, '');

        const plugins = (state.opts.plugins || []).map(handlePlugin);

        const processed = postcss(plugins)
          .process(css, {parser: safe, from: this.file.opts.filename}).css;

        const {quasis, exprs} = splitExpressions(processed);

        const quasisAst = buildQuasisAst(t, quasis);
        const exprsAst = exprs.map(exprIndex => nodeExprs[exprIndex]);

        path.node.quasi.quasis = quasisAst;
        path.node.quasi.expressions = exprsAst;
      },
    }
  };
};

function handlePlugin(pluginArg) {
  if (Array.isArray(pluginArg)) {
    return pluginArg[0].apply(null, pluginArg.slice(1));
  } else if (typeof pluginArg === 'string') {
    throw new Error('Import plugins directly; plugin path is not accepted to avoid dynamic requires');
  } else {
    return pluginArg;
  }
}

function expressionPlaceholder(i) {
  return '___QUASI_EXPR_' + i + '___';
}

function buildQuasisAst(t, quasis) {
  return quasis.map((quasi, i) => {
    const isTail = i === quasis.length - 1;
    return t.templateElement({raw: quasi, cooked: quasi}, isTail);
  });
}

const regex = /___QUASI_EXPR_(\d+)___/g;

function splitExpressions(css) {
  let found, matches = [];
  while (found = regex.exec(css)) {
    matches.push(found);
  }

  const reduction = matches.reduce((acc, match) => {
    acc.quasis.push(css.substring(acc.prevEnd, match.index));
    const [placeholder, exprIndex] = match;
    acc.exprs.push(exprIndex);
    acc.prevEnd = match.index + placeholder.length;
    return acc;
  }, {prevEnd: 0, quasis: [], exprs: []});

  reduction.quasis.push(css.substring(reduction.prevEnd, css.length));

  return {
    quasis: reduction.quasis,
    exprs: reduction.exprs
  };
}
