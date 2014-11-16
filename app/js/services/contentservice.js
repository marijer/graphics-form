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

			obj.visualformValues = [
				{
					title: 'Chart',
					value: 'Chart',
					sub:[
						{
							value: 'area chart',
							title: 'Area chart'
						},
						{
							value: 'bubble chart',
							title: 'Bubble chart'
						},
						{
							value: 'bar chart',
							title: 'Bar/Column chart'
						},
						{
							value: 'pie/donut',
							title: 'pie/donut chart'
						},
						{
							value: 'line chart',
							title: 'line chart'
						},
						{
							value: 'scatter chart',
							title: 'scatter chart'
						},
						{
							value: 'chartother',
							title: 'Chart other'
						}
					]
				},
				{
					title: 'Hierarchy',
					value: 'hierarchy',
					sub:[
						{
							value: 'treemap',
							title: 'Treemap'
						},
						{
							value: 'circle packing',
							title: 'Circle Packing'
						},
						{
							value: 'hierarchyother',
							title: 'Hierarchy other'
						}						
					]
				},
				{
					title: 'Map',
					value: 'map',
					sub:[
						{
							value: 'choropleth',
							title: 'Choropleth Map'
						},
						{
							value: 'dot map',
							title: 'Dot Map'
						},
						{
							value: 'cartogram',
							title: 'Cartogram'
						},
						{
							value: 'symbol map',
							title: 'Symbol map'
						},
						{
							value: 'mapother',
							title: 'Map other'
						}
					]
				},
				{
					title: 'Misch',
					value: 'Misch',
					sub:[
						{
							value: 'before/after',
							title: 'Before/After'
						},
						{
							value: 'streamgraph',
							title: 'Streamgraph'
						},
						{
							value: 'table',
							title: 'Table'
						},
						{
							value: 'timeline',
							title: 'Timeline'
						}												
					]
				},
				{
				title: 'Illustration',
				value: 'illustration',
					sub: [
						{
							value: 'simulation',
							title: 'Simulation / Walkthrough'
						}
					]
				},	
				{
					title: 'Textual',
					value: 'Textual'
				},
				{
					title: 'Other',
					value: 'Other'
				}
			];

			

			return obj;

	 }]);


})();