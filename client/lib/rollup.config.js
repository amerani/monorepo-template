import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'esm'
    }
  ],
  plugins: [
    nodeResolve({ extensions }),
    babel({ 
      extensions,
      babelHelpers: 'bundled',
      include: ['src/**/*'],
    }),
  ],
  external: [
    'react',
  ]
};

export default config;