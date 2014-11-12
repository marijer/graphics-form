(function(){
	'use strict';

	app.controller('LoginCtrl', ['UserService' function( UserService ){
		var self = this;

		self.userService = UserService;

		// check if user is logged in
		//UserService.session();

		self.user = {username: '', password: ''};

		self.login = function(){
			self.userService.login( self.user )
				.then( function( success ) {
       		$location.path('/new');
     		}, function( errorMsg ){
     			console.log( errorMsg );
     		});
		}

	}]);
})();