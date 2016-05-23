/* global require, module */
var bourbon = require('node-bourbon');

//adds our main css files to our bourbon so we can import them where ever needed
bourbon.includePaths.push(__dirname + '\\src\\css\\');

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    sassCompiler: {
      includePaths: bourbon.includePaths
    },
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/**/*.+(js|js.map)',
      'es6-shim/es6-shim.js',
      'reflect-metadata/**/*.+(js|js.map)',
      'rxjs/**/*.+(js|js.map)',
      '@angular/**/*.+(js|js.map)',
      'localforage/dist/localforage.js'
    ]
  });
};
