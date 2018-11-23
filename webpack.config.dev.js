import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  debug: true,									// enables debug info
  devtool: 'inline-source-map',	// generate a source map
	noInfo: false,								// webpack will display a list of all the files it is bundling
	// defines the entry point of the application
	// __dirname is part of node and uses the 'path' import
	// this sets the entry point for our application to src/home.js
  entry: [
    path.resolve(__dirname, 'src/home.js')
	],
	// could be node which would change the way webpack bundles our code
	// could be electron
	target: 'web',
	// here we tell webpack where it should create our development bundle
	// with a dev configuration webpack will NOT generate any physical files for or deveopment build
	// rather it will serve our build from memory and serve it to the browser
  output: {
    path: path.resolve(__dirname, 'src/home'),
    publicPath: '/',
    filename: 'bundle.js'
	},
	// You can tell webpack to watch for your files and run the build process
	// as soon as something is changed in your files by adding watch: true
	watch: true,

	// define pulgins to enhance webpacks power i.e. hot realoading, error trapping, style linting, etc...
	plugins: [
		// Generate an external css file with a hash in the filename
		new ExtractTextPlugin('[name].css'),

		// Create HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin({
			filename: 'home.html',
			template: 'src/home.html',	// declare this is our template
			inject: true								// tells webpack to inject any necessary script tags for me
																	// this means you can remove the script tag from home.html
		})
	],
	// tell webpack which file types it is going to handle. This concept is called loaders.
	// loaders teach webpack how to handle different file types.
	// adding a loader here means it can import those file types at the top of my javascript files and
	// webpack will intellegently bundle the files together for me.
  module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['babel']
			},
			// adding the ?sourceMap query string instructs webpack to generate a css source map
      {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: {
						loader: 'css-loader',
						options:
						{
							sourceMap: true
						}
					}
				})
			}
    ]
  }
}
