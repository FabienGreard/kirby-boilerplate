module.exports = {
  stories: ['../design-system/**/*.stories.mdx', '../design-system/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-storyshots',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
};
