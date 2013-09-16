module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		mochaTest: {
			tests: {
				options: {
					reporter:'nyan'
				},
				src:['tests/tests.js']
			}
		},
		jslint: {
			all: {
				src: [ '*.js','tests/*.js' ]
			}
		},
		watch: {
			files:['tests/*.js','*.js'],
			tasks:['mochaTest','jslint']
		}
	});
	
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-beautify');
	grunt.loadNpmTasks('grunt-jslint');
	grunt.registerTask('default',['mochaTest','watch','jslint']);
};