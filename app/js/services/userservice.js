(function(){
	'use strict';

	app.factory('UserService', [function(){
		var service = {
			isLoggedIn: false,

			session: function() {
				return $http.get('/api/session')
					.then(function( response ) { 
						service.isLoggedIn = true; 
						return response;
					}); 
			},

			login: function( user ) {
				return $http.post('/api/login', user)
					.then(function( response ) { 
						service.isLoggedIn = true; 
						return response;
					}); 
			}
		};

		return {
				service: service
		};

	}]);
})();