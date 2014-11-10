(function(){
	'use strict';
	
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


})();