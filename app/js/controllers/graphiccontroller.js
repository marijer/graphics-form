(function(){
	'use strict';

	app.controller('graphicCtrl', ['contentService', 'userService', function( contentService, userService ){
 		var self = this;

 		self.userService = userService;

 		self.graphic = {
 				title: 'hi',
 				byline: 'Zoe'
 		};

 		self.getDate = function( obj ){
 			return new Date( obj.year, obj.month - 1, obj.day);
 		}

 		self.participation = contentService.getParticipation();
 		self.newscategories = contentService.getNewscategories();


 		self.submitForm = function(isValid, data) {
		    //if(!isValid){ return; }
		    console.log( data );
		 }

	}]);
})();