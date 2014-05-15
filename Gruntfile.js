module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compile .scss files
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/build/compiled/global.css': 'css/global.scss',
        }
      }
    },

    // Add vendor prefixes to the css
    autoprefixer: {
      options: {
        browsers: ['last 2 version']
      },
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'css/build/compiled/*.css',
        dest: 'css/'
      }
    },

    // Watch files for changes. If a file is changed, run the proper tasks
    watch: {
      options: {
        livereload: true,
      },

      css: {
        files: ['css/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false,
        }
      },
    },

    // Starts a server (necessary for some file paths to work properly)
    connect: {
      server: {
        options: {
          port: 8000,
          base: './'
        }
      }
    }

  });

  // Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['sass', 'autoprefixer']);
  grunt.registerTask('dev', ['connect', 'watch']);


};