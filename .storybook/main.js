import path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: (config) => {
    debugger;
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions,
        configFile: './.storybook/tsconfig.json',
      }),
    ];

    // disable whatever is already set to load SVGs
    //@source https://github.com/storybookjs/storybook/issues/18557#issue-1283251290
    // @ts-ignore
    config.module.rules
      // @ts-ignore
      .filter((rule) => rule.test && rule.test.test('.svg'))
      // @ts-ignore
      .forEach((rule) => (rule.exclude = /\.svg$/i));
    // @ts-ignore
    config.module.rules.push({
      test: /\.svg$/,
      use: ['react-svg-loader'],
    });

    // @ts-ignore
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    // @ts-ignore
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });
    // config.resolve.alias = [
    //
    //   "@graphql",
    //   "./__mocks__",
    // ]
    return config;
  },

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-sass-postcss',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
