(function() {	 
	'use strict';

		angular.module("app")
	 .directive('generalinformationSection', [function(){
	 		return {
	 				restrict: 'A',
	 				transclude: true,
	 				templateUrl: 'app/partials/basic.html',
	 				controller: function( $scope ){
	 					$scope.doSomething = function( args ){
	 						console.log('checking value');
	 					};
	 				},
	 				link: function( scope, element, attributes ){

	 						
	 				}
	 		};
	 }]);
})();