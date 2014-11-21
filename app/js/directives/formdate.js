(function(){
	'use strict';
	
	angular.module("app")
	.directive('formDate', [function(){

		function formatDate( d ){
			return Number( ('0' + String( d)).slice(-2) );
		};

		return {
			restrict: 'E',
			scope: {
				formData: '=',
				objData: '=',
				placeholderData: '='
			},
			templateUrl: 'app/partials/formdate.html',
			link: function( scope, element, attrs ){				

				scope.getDate = function( obj ){
					if( !obj.year || !obj.month || !obj.day ){ 
						return new Date();
					}

					var d = new Date( obj.year, obj.month - 1, obj.day);
					scope.objData.date = scope.placeholderData.year + '' + formatDate(scope.placeholderData.month) + '' + formatDate(scope.placeholderData.day);

		 			return d;
				}

				function checkPrevDate(){
					var d = String( scope.objData.date );
					if( !d || d === '' ){
						return false;
					}

					scope.placeholderData = {};

					scope.placeholderData.year = d.slice( 0,4 );
					scope.placeholderData.month = d.slice( 4,6 );
					scope.placeholderData.day = d.slice( 6,8 );
				}

				checkPrevDate();
			}
		};
	}]);
})();