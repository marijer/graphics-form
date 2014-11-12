(function(){
	'use strict';

	app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
	    .when('/login', {
	      templateUrl: 'app/partials/login.html',
	      controller: 'LoginCtrl as ctrl'
	    })
	    .when('/new', {
	      templateUrl: 'app/partials/graphicform.html',
	      controller: 'graphicCtrl as ctrl',
	   //    resolve: {
				// 	auth: ['$q', '$location', 'UserService', 
				// 		function($q, $location, UserService) {
				// 			return UserService.session().then( 
				// 				function( success ) {}, 
				// 				function( err ) {
				// 					$location.path('/login'); $location.replace(); return $q.reject(err);
				// 			}); 
				// 	}]
				// }
	    })
	    .otherwise( {redirectTo: '/new'} );
  }]);

})();