(function(){
	'use strict';

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

})();