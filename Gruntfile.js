module.exports = function(grunt) {

  // measures the time each task takes
  require('time-grunt')(grunt);

  // make tasks accessible from grunt folder
  require('load-grunt-config')(grunt);

  // set tasks.
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('css', ['csslint:strict']);
};