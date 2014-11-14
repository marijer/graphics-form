module.exports = function( grunt, options ){
	return {
	  options: { // options
	    keepSpecialComments: '0'
	  },
	  css: { // target
	    src: 'dist/css/app.css',
	    dest: 'dist/css/app-min.css'
	  }
  };
}