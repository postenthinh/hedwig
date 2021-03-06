/**
 * Rollup config
 * https://rollupjs.org/
 */

import jsx from 'rollup-plugin-jsx';


export default {
  input: 'src/hedwig-react.jsx',
  external: ['react'],
  onwarn: (warning) => {
    // Skip certain warnings
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    // console.warn everything else
    console.warn(warning.message);
  },
  output: {
    file: 'dist/hedwig-react.js',
    format: 'cjs',
  },
  plugins: [
    jsx({ factory: 'React.createElement' }),
  ],
};
