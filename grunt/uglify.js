module.exports = function( grunt, options ){
	return {
		js: { // target
			options: {
				    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				  },
		    files: { // target options
		     'dist/js/app-min.js': ['dist/js/app.js'] // destination:source/s
		    }
		  }
  };
}