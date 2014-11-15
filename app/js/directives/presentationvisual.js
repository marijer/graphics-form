(function(){
	'use strict';

	angular.module('app')
	.directive('presentationVisual', function(){
		return {
			restrict: 'A',
			templateUrl: 'app/partials/presentation-visual.html'
		}

	});
})();