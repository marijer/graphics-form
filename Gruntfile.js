module.exports = function(grunt) {

  // measures the time each task takes
  require('time-grunt')(grunt);

  // make tasks accessible from grunt folder
require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json')
    }
});

  // set tasks.

  grunt.registerTask('default', ['clean']);
  grunt.registerTask('css', ['csslint:strict']);


  grunt.registerTask('build', ['destroy', 'concatAndUglify']);


  grunt.registerTask('destroy', ['clean']);
  grunt.registerTask('concatAndUglify', ['concat:js', 'uglify:js', 'concat:css', 'cssmin']);
};