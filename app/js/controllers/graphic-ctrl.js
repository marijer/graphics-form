(function(){
	'use strict';

	angular.module("app")
	.controller('graphicCtrl', ['contentService', 'UserService', 'dbService', function( contentService, UserService, dbService ){
 		var self = this;

 		self.userService = UserService;

 		self.getItems = function(){
	    dbService.get('products').then(function( data ){
	        //self.products = data.data;
	        console.log( data.data )
	    });
	  };

	  self.getItems();

    self.deleteProduct = function( product ){
        if(confirm("Are you sure to remove the product")){
            dbService.delete("products/"+product.id).then(function(result){
                //$scope.products = _.without($scope.products, _.findWhere($scope.products, {id:product.id}));
            });
        }
    };

    self.createProduct = function( product ){
      dbService.post('products', product).then(function (result) {
          if(result.status != 'error'){
              var x = angular.copy(product);
              x.save = 'insert';
              x.id = result.data;
          }else{
              console.log(result);
          }
      });
    }

    self.updateProduct = function( product ){
        dbService.put('products/'+product.id, product).then(function (result) {
            if(result.status != 'error'){
                var x = angular.copy(product);
                x.save = 'update';
                $modalInstance.close(x);
            }else{
                console.log(result);
            }
        });
    };

    self.saveProduct = function ( product ) {
        if(product.id > 0){
        	self.updateProduct( product );
        } else {
					self.createProduct( product );
        }
     };		

 		self.graphic = {
 				title: 'Test',
 		};

 		self.participation = contentService.getParticipation();
 		self.newscategories = contentService.getNewscategories();

 		self.submitForm = function(isValid, data) {
		    //if(!isValid){ return; }

		    console.log( data );

		    self.createProduct( data );
		 }

	}]);
})();