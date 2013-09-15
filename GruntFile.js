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
		watch: {
			files:['tests/*.js','*.js'],
			tasks:['mochaTest']
		}

	});	
	
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['mochaTest','watch']);
};