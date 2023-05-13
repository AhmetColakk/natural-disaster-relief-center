module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,jpg,json,js,svg}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};