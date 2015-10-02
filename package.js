Package.describe({
  summary: "Inline CSS into HTML via the NPM 'juice' package in Meteor",
  version: '0.1.4',
  name: 'oleh:npm-juice',
  git: 'https://github.com/OlehHappy/npm-juice.git'
});

Npm.depends({
  juice: "1.5.0",
});

Package.onUse(function (api) {

  api.addFiles([
    'lib/juice.js',
  ], ['server']);
  
  api.export([
    'juice'
  ]);
});
