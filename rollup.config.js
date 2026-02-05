import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'default',
        sourcemap: false,
      },
      {
        file: 'dist/index.mjs',
        format: 'es',
        exports: 'default',
        sourcemap: false,
      },
    ],
    plugins: [
      external(),
      resolve({
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
      typescript({
        useTsconfigDeclarationDir: true,
        clean: true,
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        presets: ['@babel/preset-react'],
      }),
      terser({
        compress: {
          drop_console: true,
        },
      }),
    ],
    external: ['react', 'react-dom'],
  },
]
