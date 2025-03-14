export const presets = ['@babel/preset-env', '@babel/preset-react'];
export const plugins = ['@babel/plugin-transform-runtime'];
export const env = {
  test: {
    plugins: ['@babel/plugin-transform-modules-commonjs'],
  },
};

// instruction to recognize .jsx instructions here are in jest