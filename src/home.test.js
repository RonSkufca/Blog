// Mocha does not come with an assertion library so we are going to use Chai's expect style
// this is called a 'named' import
import {expect} from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';

// describe our first test we are using arrow functions i.e. '() =>' you could use 'function()' instead
describe('My first test', () => {

	// our first test
	it('should pass', () => {
		// body of our test goes here
		expect(true).to.equal(true);
	});
});

// working example of how to interact with jsdom
describe('home.html', () => {
	it('should have h1 that says Users', (done) => {
		const index = fs.readFileSync('./src/home.html', 'utf-8');
		jsdom.env(index, function(err, window) {
			const h1 = window.document.getElementsByTagName('h1')[0];
			expect(h1.innerHTML).to.equal("Users");
			done();
			window.close();
		});
	})
});
