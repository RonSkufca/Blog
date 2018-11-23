// This script generates mock data for the local development environment
// This way you don't have to point to an actual API,
// but you can enjoy realistic, run randomized data, and rapid page loads due to loca, static data

/* eslint-disable no-console */
import jsonSchemaFaker from 'json-schema-faker';
import {schema} from './mockDataSchema';						// import the schema we defined
import fs from 'fs';															// adds the ability to write to a file
import chalk from 'chalk';												// adds color to our output

// pass the schema we defined in mockDataSchema.js to json schema faker.
// json schema faker is going to look at the schema, generate a lot of randomized data, and convert that to a json string.
// this gives us a string of json.
const json = JSON.stringify(jsonSchemaFaker(schema));

// write our database file
fs.writeFile('./src/api/db.json', json, function(error) {
	if(error) {
		return console.log(chalk.red(error));
	}
	else {
		console.log(chalk.green('Mock data created.'));
	}
});
