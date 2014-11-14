(function(){
	'use strict';

	angular.module("app")
	.controller('graphicCtrl', ['contentService', 'UserService', 'dbService', function( contentService, UserService, dbService ){
 		var self = this;

 		self.userService = UserService;

    dbService.get('products').then(function( data ){
        self.products = data.data;
        console.log( data.data )
    });

		

 		self.graphic = {
 				title: 'Test',
 		};

 		self.participation = contentService.getParticipation();
 		self.newscategories = contentService.getNewscategories();

 		self.submitForm = function(isValid, data) {
		    //if(!isValid){ return; }

		    console.log( data );
		 }

	}]);
})();