import { babel } from '@rollup/plugin-babel';
import pkg from './package.json';

const extensions = [
  '.js', '.ts',
];

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    babel({ 
      extensions,
      babelHelpers: 'bundled',
      include: ['src/**/*'],
    })
  ]
};

export default config;