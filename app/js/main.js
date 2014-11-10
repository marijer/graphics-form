(function(){
	'use strict';

	 var app = angular.module('addGraphicApp', []);

	 app.controller('mainController', ['contentService', function( contentService ){
	 		var self = this;

	 		self.graphic = {
	 				title: 'hi',
	 				byline: 'Zoe'
	 		};

	 		self.getDate = function( obj ){
	 			var d = new Date( obj.year, obj.month - 1, obj.day);
	 			//console.log( d );
	 			return d;
	 		}

	 		self.participation = contentService.getParticipation();
	 		self.newscategories = contentService.getNewscategories();


	 		self.submitForm = function(isValid, data) {
			    //if(!isValid){ return; }
			    console.log( data );
			 }

	 }]);

	 app.factory('contentService', [function(){

			var participation = [
			 			{
			 				value: 'Social',
			 				title: 'Social Sphere'
			 			},
						{
							value: 'readerGenerated',
							title: 'Reader Generated'
						},
						{
							value: 'openData',
							title: 'Open Data'
						},
						{
							value: 'gamification',
							title: 'Gamefication'
						},
						{
							value: 'tool',
							title: 'Tool'
						}
			 		];

			var newscategories = [
			 			{
			 				value: 'demographics',
			 				title: 'Demographics'
			 			},
						{
							value: 'Sports',
							title: 'Sports'
						},
						{
							value: 'Economy',
							title: 'Economy'
						},
						{
							value: 'gamification',
							title: 'Gamefication'
						},
						{
							value: 'tool',
							title: 'Tool'
						}
			 		];

			return {
				getParticipation: function(){
					return participation;
				},
				getNewscategories: function(){
					return newscategories;
				}
			}

	 }]);

	 app.factory('dbService', ['$http', function( $http ){
			var myUrl = '/api/note';

	 		function save( form ){
	 			$http.post( myUrl, form )
					.then(fetchTodos) .then(function(response) {
			        // self.newTodo = {};
			    });
				};

				function get(){
					return $http.get( myUrl )
					.then( function( response ) {
						self.items = response.data; 
					}, function( errResponse ) {
						console.error('Error while fetching notes');
					});
				}
			
			return{
				save: save,
				get: get
			}

	 }]);

	 app.directive('basicSection', function(){
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
	 });

	 app.directive('graphicForm', [function(){
	 		return {
	 			restrict: 'E',
	 			templateUrl: 'app/partials/graphicform.html'
	 		};
	 }]);

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

	 app.directive('partipationSection', function(){
	 		return {
	 				restrict: 'A',
	 				templateUrl: 'app/partials/participation.html'
	 		};
	 });

	 app.directive('visualformSection', function(){
	 		return {
	 			restrict: 'A',
	 			templateUrl: 'app/partials/visualform.html'
	 		};
	 });

	 app.filter('timeAgo', [function(){
	 	var ONE_SECOND  =	1000,
	 			ONE_MINUTE  = ONE_SECOND * 60,
	 			ONE_HOUR    = ONE_MINUTE * 60,
	 			ONE_DAY     = ONE_HOUR * 24,
	 			ONE_MONTH   = ONE_DAY * 30,
	 			ONE_YEAR		= ONE_DAY * 365,
	 			ONE_DECADE	= ONE_YEAR * 10;

	 		return function( ts ){
	 			var currentTime = new Date().getTime(),
	 				  diff = currentTime - ( ts.getTime() ),
	 				  total, str;

 				switch( true ){
 					case ( diff < ONE_MINUTE ):
 						total = Math.floor( diff / ONE_SECOND);
 						str = 'seconds ago';
 						break;
 					case ( diff < ONE_HOUR ):
 						total = Math.floor( diff / ONE_MINUTE);
 						str = 'minutes ago';
 						break;
 					case ( diff < ONE_DAY ):
 						total = Math.floor( diff / ONE_HOUR);
 						str = 'hours ago';
 						break;
 					case ( diff < ONE_MONTH ):
 						str = 'days ago';
 					case ( diff < ONE_YEAR ):
 						total = Math.floor( diff / ONE_MONTH);
 						str = 'months ago';
 						break;
 					case ( diff < ONE_DECADE ):
 						total = Math.floor( diff / ONE_YEAR);
 						str = 'years ago';
 						break;
 					default:
 						total = 'a long long';
 						str = 'time ago';
 					}

 					return total + ' ' + str;
	 		}
	 }]);


}());