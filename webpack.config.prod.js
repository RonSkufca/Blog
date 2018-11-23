import path from 'path';
//import webpackConfigDev from './webpack.config.dev';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,									// enables debug info
  devtool: 'source-map',				// generate a source map. inline-source-map is used for development, source-map is used for production
	noInfo: false,								// webpack will display a list of all the files it is bundling
	// defines the entry point of the application
	// __dirname is part of node and uses the 'path' import
	// this sets the entry point for our application to src/home.js
  entry: {
		vendor: path.resolve(__dirname, 'src/vendor'),
    main: path.resolve(__dirname, 'src/home')
	},
	// could be node which would change the way webpack bundles our code
	// could be electron
	target: 'web',
	// here we tell webpack where it should create our development bundle
	// with a dev configuration webpack will NOT generate any physical files for or deveopment build
	// rather it will serve our build from memory and serve it to the browser
  output: {
    path: path.resolve(__dirname, 'dist'),	// change to dist for production
		publicPath: '/',
		// tells webpack to use the name we defined in the entry point.
		// this will generate a vendor.js and a main.js
		// chunckhash is a webpack variable
		// name each bundle with a prefix we defined in the entry point, then add a dot .
		// then add a hash, finally add a . js at the end
		// this ensures our file name changes ONLY when we change the code.
    filename: '[name].[chunkhash].js'
	},
	// You can tell webpack to watch for your files and run the build process
	// as soon as something is changed in your files by adding watch: true
	watch: true,

	// define pulgins to enhance webpacks power i.e. hot realoading, error trapping, style linting, etc...
	plugins: [
		// Generate an external css file with a hash in the filename
		new ExtractTextPlugin('[name].[contenthash].css'),

		// Hash the files using MD5 so that their names change when the content changes
		new WebpackMd5Hash(),

		// We are telling webpack to generate a separate chunk using the code that is referenced in our vendor entry point.
		// NOTE: the name: 'vendor' corresponds to the key we created in the entry point 'vendor'
		// chuncks and bundles are the same thing.
		// the CommonsChunckPlugin will look at the items we imported in the vendor.js file
		// the fetch polyfill js wil be added to the vendor.js file since we imported it in vendor.js
		// Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

		// Create HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin({
			filename: 'home.html',
			template: 'src/home.html',	// declare this is our template
			inject: true,								// tells webpack to inject any necessary script tags for me this means you can remove the script tag from home.html
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			},
		}),

		// Remove any duplicate packages when generating the bundle
		new webpack.optimize.DedupePlugin(),

		// Minify JS
		new webpack.optimize.UglifyJsPlugin()
	],
	// tell webpack which file types it is going to handle. This concept is called loaders.
	// loaders teach webpack how to handle different file types.
	// adding a loader here means it can import those file types at the top of my javascript files and
	// webpack will intellegently bundle the files together for me.
  module: {
    loaders: [
			{test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
			// adding the ?sourceMap query string instructs webpack to generate a css source map
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
