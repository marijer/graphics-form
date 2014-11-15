(function(){
	'use strict';
	
	angular.module("app")
	.factory('contentService', [function(){
			var obj = {};

			obj.participation = [
			 	{
	 				value: 'social',
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
					title: 'Gamification'
				},
				{
					value: 'tool',
					title: 'Tool'
				}
			];

			obj.newspapers = [
			 	{
	 				value: 'Ny Times',
	 				title: 'New York Times'
	 			},
			 	{
	 				value: 'Guardian',
	 				title: 'Guardian'
	 			},
			]


			obj.newscategories = [
				{
					value: 'Economy',
					title: 'Business'
				},
				{
					value: 'Conflict',
					title: 'Conflict'
				},
				{
					value: 'Culture',
					title: 'Culture'
				},
				{
					value: 'Demographics',
					title: 'Demographics'
				},
				{
					value: 'Disaster',
					title: 'Disaster'
				},
				{
					value: 'Environment',
					title: 'Environment'
				},
				{
					value: 'Health',
					title: 'Health'
				},
				{
					value: 'LifeStyle',
					title: 'Life and Style'
				},
				{
					value: 'Other',
					title: 'Other'
				},
				{
					value: 'Politics',
					title: 'Politics'
				},
				{
					value: 'Science',
					title: 'Science'
				},
				{
					value: 'Sports',
					title: 'Sports'
				}
	 		];

	 		obj.readerdrivenValues = [
				{
					value: 'user',
					title: 'User'
				},
				{
					value: 'hybrid',
					title: 'Hybrid'
				},
				{
					value: 'author',
					title: 'Author'
				}
			];

			obj.visualizationtypesValues = [
				{
					value: 'quantitative',
					title: 'quantitative'
				},
				{
					value: 'hybrid',
					title: 'hybrid'
				},
				{
					value: 'qualitative',
					title: 'qualitative'
				},
				{
				value: 'debatable',
				title: 'debatable'
				}
			];

			obj.annotationValues = [
				{
					value: 'low',
					title: 'low'
				},
				{
					value: 'high',
					title: 'high'
				},
				{
				value: 'debatable',
				title: 'debatable'
				}
			];

			

			return obj;

	 }]);


})();