(function(){
	'use strict';

	 app.directive('formGroup', function(){
	 		return {
		 		restrict: 'AE',
		 		transclude: true,
		 		scope: {
		 			label: '@',
		 			blur: '@'
		 		},
		 		controller: function( $scope ){
		 			//console.log( $scope );
		 			// $scope.blurBool
		 		},
		 		templateUrl: 'app/partials/formgroup.html'
		 	};
	 });

})();