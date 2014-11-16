(function(){
	'use strict';
	
	angular.module("app")
	.directive('formDate', [function(){
		return {
			restrict: 'E',
			scope: {
				formData: '=',
				objData: '=',
				placeholderData: '='
			},
			templateUrl: 'app/partials/formdate.html',
			link: function( $scope, $element, $attrs ){				

				$scope.getDate = function( obj ){
					$scope.objData.date = $scope.placeholderData.year + '' + $scope.placeholderData.month + '' + $scope.placeholderData.day;

					if( !obj.year || !obj.month || !obj.day ){ 
						return new Date();
					}
		 			return new Date( obj.year, obj.month - 1, obj.day);
		 		}

			}
		};
	}]);
})();