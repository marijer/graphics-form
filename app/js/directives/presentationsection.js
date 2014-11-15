(function(){
	'use strict';
	
	angular.module("app")
	 .directive('presentationSection', [function(){
	 		return {
	 			restrict: 'A',
	 			templateUrl: 'app/partials/presentation.html'
	 		};
	 }]);	
})();