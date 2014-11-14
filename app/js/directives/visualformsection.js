(function(){
	'use strict';
	
	angular.module("app")
	 .directive('visualformSection', [function(){
	 		return {
	 			restrict: 'A',
	 			templateUrl: 'app/partials/visualform.html'
	 		};
	 }]);	
})();