(function(){
	'use strict';
	
	angular.module("app")
	.factory('contentService', [function(){

			var participation = [
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


})();