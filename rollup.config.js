import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import ts from 'typescript';

import pkg from './package.json';

export default {
  input: './index.ts',
  output: [
    {
      file: pkg.exports['.'].require,
      format: 'cjs',
    },
    {
      preserveModules: true,
      dir: pkg.modulesDir,
      format: 'es',
    },
  ],
  external: [
    'react/jsx-runtime',
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      tsconfig: 'tsconfig.rollup.json',
      outputToFilesystem: true,
      noForceEmit: false, // Slower build times, and additional types, but preserve the previous behavior.
      typescript: ts,
    }),
    babel({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      babelHelpers: 'bundled',
    }),
  ],
};
