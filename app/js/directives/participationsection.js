(function(){
	'use strict';

	angular.module("app")
	 .directive('participationSection', [function(){
	 		return {
	 				restrict: 'A',
	 				templateUrl: 'app/partials/participation.html'
	 		};
	 }]);

})();