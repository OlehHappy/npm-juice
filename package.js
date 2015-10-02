Package.describe({
  summary: "Inline CSS into HTML via the NPM 'juice' package",
  version: '0.1.3',
  name: "oleh:npm-juice"
});

Npm.depends({
  juice: "1.0.0", 
});

Package.onUse(function (api) {

  api.addFiles([
    'lib/juice.js',
  ], ['server']);
  
  api.export([
    'juice'
  ]);
});
