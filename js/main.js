(function(){
	'use strict';

	 var app = angular.module('addGraphicApp', []);

	 app.controller('mainController', ['contentService', function( contentService ){
	 		var self = this;

	 		self.graphic = {
	 				title: 'hi',
	 				byline: 'Zoe'
	 		};

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
	 				templateUrl: 'partials/basic.html',
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
	 			templateUrl: 'partials/graphicform.html'
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
		 		templateUrl: 'partials/formgroup.html'
		 	};
	 });

	 app.directive('partipationSection', function(){
	 		return {
	 				restrict: 'A',
	 				templateUrl: 'partials/participation.html'
	 		};
	 });

	 app.directive('visualformSection', function(){
	 		return {
	 			restrict: 'A',
	 			templateUrl: 'partials/visualform.html'
	 		};
	 });

	 app.filter('timeAgo', [function(){
	 	var ONE_SECOND  =	1000 * 60,
	 			ONE_MINUTE  = ONE_SECOND * 60,
	 			ONE_HOUR    = ONE_MINUTE * 60,
	 			ONE_DAY     = ONE_HOUR * 24,
	 			ONE_MONTH   = ONE_DAY * 30,
	 			ONE_YEAR		= ONE_DAY * 365;

	 		return function( ts ){
	 			var currentTime = new Date().getTime(),
	 				  diff = currentTime - ts;

 				switch( true ){
 					case diff < ONE_MINUTE:
 						return 'seconds ago';
 						break;
 					case diff < ONE_HOUR:
 						return 'minutes ago';
 						break;
 					case diff < ONE_DAY:
 						return 'hours ago';
 						break;
 					case diff < ONE_MONTH:
 						return 'days ago';
 					case diff < ONE_YEAR:
 						return 'months ago';
 						break;
 					default:
 						return 'a long long time ago';
 					}
	 		}
	 }]);


}());