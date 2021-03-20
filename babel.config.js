module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          useBuiltIns: false,
          targets:
            'Edge >= 83, Firefox >= 78, FirefoxAndroid  >= 78, Chrome >= 80, ChromeAndroid >= 80, Opera >= 67, OperaMobile >= 67, Safari >= 13.1, iOS >= 13.4',
        },
      },
    ],
  ],
};
