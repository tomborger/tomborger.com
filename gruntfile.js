module.exports = function(grunt){

	"use strict";

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		cssmin: {
			build: {
				src: 'css/style.css',
				dest: 'css/style.css'
			}
		},
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'css/style.css': 'sass/all.scss'
				}
			}
		},

		watch: {
			css: {
				files: ['sass/*.scss', 'js/src/*.js', 'js/vendor/*.js'],
				tasks: ['compile']
			}
		},

		uglify: {
	    my_target: {
	      files: {
	        'js/interaction.js': ['js/src/*.js','js/vendor/*.js']
	      }
	    }
	  }

	});
  
  grunt.registerTask('default',   []);
	grunt.registerTask('compile', ['sass','cssmin','uglify']);

};