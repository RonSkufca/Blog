// Runs a production webpack config

/* esling-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import chalk from 'chalk';

// declare we are running node in production mode
// babel will look for this environment variable to determine how they are built
process.env.NODE_ENV = 'development';

// since production minification might take a little while, display a message to the user
console.log(chalk.blue('Generating minified bundle for production....'))

// call webpack and pass it our webpack.config.prod configuration
webpack(webpackConfig).run((error, stats) => {
		if(error) {
			console.log(chalk.red(error));
			return 1;
		}

		// display stats to the console
		const jsonStats = stats.toJson();

		if(jsonStats.hasErrors) {
			return jsonStats.errors.map(error => console.log(chalk.red(error)));
		}

		if(jsonStats.hasWarnings) {
			console.log(chalk.yellow('Webpack generated the following warnings:'))
			jsonStats.errors.map(warning => console.log(chalk.yellow(warning)));
		}

		console.log(`Webpack stats: ${stats}`);

		// if we got this far the build succeeded
		console.log(chalk.green('Application built successfully. Your files are in /dist'));

		return 0;
});
