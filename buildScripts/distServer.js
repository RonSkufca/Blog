// Express.js is a Node.js web application server framework, designed for building single-page,
// multi-page, and hybrid web applications.
// It is the de facto standard server framework for node.js.
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

// assign a port number to listen on.
// create an instance of express and assign it to the variable.
// const keywork introduced in ES6
const port = 3000;
const expressApp = express();

// tell express to serve static file in the dist (distribution) folder
expressApp.use(express.static('dist'));

// add gZip compression
expressApp.use(compression());

// tell express which routes it should handle
// we are requesting the root via '/' and we are serving the page specified in '../dist/home.html'
// any references to the root should be handled by the function below
expressApp.get('*', function(request, response) {
	// concat the running folder using __dirname with the location of our home.html
	// __dirname retrieves the directory name that we are currently running in
	response.sendFile(path.join(__dirname, '../dist/home.html'));
});

// // new route to simulate getting users from a database
// expressApp.get('/users', function(request, response) {
// 	// simulate real users coming from a database
// 	response.json([
// 		{"id": 1, "firstName":"Ron", "lastName":"Skufca"},
// 		{"id": 2, "firstName":"Michelle", "lastName":"Skufca"},
// 		{"id": 3, "firstName":"Leah", "lastName":"Skufca"},
// 		{"id": 4, "firstName":"Lucia", "lastName":"Skufca"}
// 	]);
// });

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
