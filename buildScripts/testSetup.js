// this file is NOT transpiled so it must use CommonJS or ES5 2009

// register to transpile before our tests run.
// tells Mocha that first Babel should transpile or tests before Mocha runs them.
require('babel-register');

// disable webpack features that Mocha does NOT understand
// i.e. in index.js the import './index.css' line is webpack. Mocha does not understand it
// when Moca sees the above line of js it treats it like an empty function
require.extensions['.css'] = function() {};

// In package.json we created the 'test' in the scripts area. I will explain it here
// "test": "mocha --reporter probress buildScripts/testSetup.js \"src/**/*.test.js\""
// 1 	specify the reporter we want to use. the reporter setting determines how the test output should display
// 		use the progress reporter because it is clean and simple
//		Mocha has many more reporters
// 2	tell Mocha to run the testSetup.js script
// 3	after Mocha is done running testSetup.js it should run any test in source folder
//		and /**/ means any subfolders.
//		we define any test files and any file that ends in .test.js.
//		this is why putting test files in the same location is preferred. it makes it easy.
//
// to run it, go to the terminal and type 'npm test'
// you may get a warning stating '"test": "mocha --reporter probress buildScripts/testSetup.js \"src/**/*.test.js\""'
// that means you have no tests written yet.
