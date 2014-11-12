(function(){
	'use strict';

	 app.directive('formGroup', [function(){
	 		return {
		 		restrict: 'AE',
		 		transclude: true,
		 		scope: {
		 			label: '@',
		 			blur: '@'
		 		},
		 		templateUrl: 'app/partials/formgroup.html'
		 	};
	 }]);
})();