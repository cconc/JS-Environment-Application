//This file isnt transpiled, so must use CommonJS & ES5

// Register babel to transpile before our tests run.

require('babel-register')();

require.extensions['.css'] = function() {};
