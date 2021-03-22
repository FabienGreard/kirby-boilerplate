module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          useBuiltIns: false,
          targets: 'last 2 versions, not dead, >0.2%, not IE 11',
        },
      },
    ],
  ],
};
