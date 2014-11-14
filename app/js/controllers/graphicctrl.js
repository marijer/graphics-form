(function(){
	'use strict';

	app.controller('graphicCtrl', ['contentService', 'UserService', function( contentService, UserService ){
 		var self = this;

 		self.userService = UserService;

 		self.graphic = {
 				title: 'Test',
 				byline: 'Test',
 				img: '',
 		};

 		self.participation = contentService.getParticipation();
 		self.newscategories = contentService.getNewscategories();

 		self.submitForm = function(isValid, data) {
		    //if(!isValid){ return; }

		    console.log( data );
		 }

	}]);
})();