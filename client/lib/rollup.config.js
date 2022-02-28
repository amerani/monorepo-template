import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';

import pkg from './package.json';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    resolve({ 
      browser: true,
      extensions 
    }),
    commonjs(),
    babel({ 
      extensions,
      babelHelpers: 'bundled',
      include: ['src/**/*'],
    }),
  ],
  external: [
    'react',
    'react-dom',
    'prop-types'
  ]
};

export default config;