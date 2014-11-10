(function(){
	'use strict';

	app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'app/partials/graphicform.html'
    })
    .when('/second', {
      template: '<h5>This is the second route</h5>',
      controller: 'mainController as ctrl'
    })
    .otherwise({redirectTo: '/'});
  }]);

})();