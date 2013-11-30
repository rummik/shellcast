/**
 * Dummy DOM
 * Inspired by https://github.com/dtinth/headless-terminal/blob/master/headless-terminal.js
 *
 * License: MIT License
 */

global.navigator = { userAgent: '' };

global.document = {
	style: {},
	navigator: navigator,
	innerHTML: '',

	getElementsByTagName: function() {
		return this.elements;
	},

	createElement: function() {
		return this;
	},
};

document.elements = [document];

var fn = function() {};

[
	'addEventListener',
	'appendChild',
	'removeChild',
	'setAttribute',
	'focus',
].forEach(function(method) {
	document[method] = fn;
});

[
	'body',
	'context',
	'parent',
	'parentNode',
	'ownerDocument',
	'defaultView',
].forEach(function(property) {
	document[property] = document;
});

module.exports = exports = document;