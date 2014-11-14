module.exports = function (grunt, options) {
	return {
		strict: {
      options: {
        import: 2
      },
      src: ['app/css/*.css']
    },
	  lax: {
      options: {
        import: false
      },
      src: ['app/css/*.css']
	  }
	};
}