(function(){
	'use strict';

	app.directive('formDate', [function(){
		return {
			restrict: 'E',
			scope: {
				formData: '=',
				objData: '='
			},
			templateUrl: 'app/partials/formdate.html',
			link: function( $scope, $element, $attrs ){

				$scope.getDate = function( obj ){
					if( !obj.year || !obj.month || !obj.day ){ 
						return new Date();
					}
		 			return new Date( obj.year, obj.month - 1, obj.day);
		 		}

			}
		};
	}]);
})();