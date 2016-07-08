import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    commonjs(),
    nodeResolve(),
    uglify({
      output: {
        // Preserve license comments
        comments (node, comment) {
          if (comment.type === 'command2') return /@preserve|@license|@cc_on/i.test(comment.value);
          return false;
        }
      }
    })
  ]
};
