const fs = require('fs');
const path = require('path');
const assert = require('assert');

// testing es6 version
const render = require('../');

describe('Renderer', () => {

	describe('Fixtures', () => {

		const fixturesPath = path.resolve(__dirname, 'fixtures');

		fs.readdirSync(fixturesPath).forEach(filename => {
			const filepath = path.resolve(fixturesPath, filename);
			const data = require(filepath);

			const testMethod = data.only ? it.only : it;

			testMethod(filename, () => {
				assert.equal(render(data.input), data.output);
			});
		});

	});

});
