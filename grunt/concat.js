module.exports = function( grunt, options ){
	return {
    css: { // target
      src: ['app/css/*.css'],
      dest: 'dist/css/app.css'
    },
    js: { // target
      options: {
          separator: ';'
      },
      src: [
            'app/js/*.js',
            'app/js/**/*.js'
      ],
      dest: 'dist/js/app.js'
    }
  };
}