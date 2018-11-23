// Express.js is a Node.js web application server framework, designed for building single-page,
// multi-page, and hybrid web applications.
// It is the de facto standard server framework for node.js.
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

// assign a port number to listen on.
// create an instance of express and assign it to the variable.
// const keywork introduced in ES6
const port = 3000;
const expressApp = express();

/*
	Webpack is a module builder. This is important to understand, as Webpack does not run during your page,
	it runs during your development. Webpack is a tool wherein you use a configuration to explain to the builder
	how to load specific things. You describe to Webpack how to load *.js files,
	or how it should look at .scss files, etc. Then, when you run it, it goes into your entry point
	and walks up and down your program and figures out exactly what it needs, in what order it needs it,
	and what each piece depends on. It will then create bundles as few as possible, as optimized as possible,
	that you include as the scripts in your application.
*/
// call webpack and pass it an instance of the config.
const compiler = webpack(config);

// app.use tells express other things we would like to use. tell express to use our webpack dev middlewhare
// pass it the compiler we declared above.
// noInfo: true do not display any special info
	expressApp.use(require('webpack-dev-middleware')(compiler, {
	noInfo: false,
	publicPath: config.output.publicPath
}));

expressApp.use(express.static(path.join(__dirname, '../src')));

// tell express which routes it should handle
// we are requesting the root via '/' and we are serving the page specified in '../src/home.html'
// any references to the root should be handled by the function below
expressApp.get('/', function(request, response) {
	// concat the running folder using __dirname with the location of our home.html
	// __dirname retrieves the directory name that we are currently running in
	response.sendFile(path.join(__dirname, '../src/home.html'));
});

// new route to simulate getting users from a database
expressApp.get('/users', function(request, response) {
	// simulate real users coming from a database
	response.json([
		{"id": 1, "firstName":"Ron", "lastName":"Skufca"},
		{"id": 2, "firstName":"Michelle", "lastName":"Skufca"},
		{"id": 3, "firstName":"Leah", "lastName":"Skufca"},
		{"id": 4, "firstName":"Lucia", "lastName":"Skufca"}
	]);
});

// instruct express to listen on the port we specified earlier
// instruct express to open the app on the specified address
expressApp.listen(port, function(error) {
	// if there is an error listening log it.
	if(error) {
		console.log(error);
	}
	// if not then open up the website
	else {
		open('http://localhost:'+ port);
	}
});

// to run this go to the terminal and type node buildScripts/srcServer.js
// to kill this server instance type CTRL+C
