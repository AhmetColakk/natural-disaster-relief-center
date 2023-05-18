module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{js,svg,css,png,jpg,html,json}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};