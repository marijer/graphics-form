(function(){
	'use strict';

	angular.module("app")
	.controller('graphicCtrl', ['contentService', 'UserService', 'dbService', function( contentService, UserService, dbService ){
   var self = this;

   self.userService = UserService;
   self.configContent = contentService;

   self.getItems = function(){
     dbService.get('items').then(function( data ){
	        //self.items = data.data;
	        console.log( data.data )
       });
   };

	 // self.getItems();

   self.deleteItem = function( product ){
    if(confirm("Are you sure to remove the product")){
      dbService.delete("items/"+product.id).then(function(result){
                //$scope.items = _.without($scope.items, _.findWhere($scope.items, {id:product.id}));
              });
    }
  };

  self.addItem = function( product ){
    dbService.post('items', product).then(function (result) {
      if(result.status != 'error'){
        var x = angular.copy(product);
        x.save = 'insert';
        x.id = result.data;
      }else{
        console.log(result);
      }
    });
  }

  self.updateItem = function( product ){
    dbService.put('items/'+product.id, product).then(function (result) {
      if(result.status != 'error'){
        var x = angular.copy(product);
        x.save = 'update';
        $modalInstance.close(x);
      }else{
        console.log(result);
      }
    });
  };

  self.saveItem = function ( product ) {
    if(product.id > 0){
     self.updateProduct( product );
     } else {
       self.createProduct( product );
     }
   };		

    // mock data
    self.graphic = {
      title: "Test", 
      readerGenerated: 1, 
      readerdriven: "author", 
      annotation: "low", 
      credits: "bam", 
      visualform: 'map',
      visualformsub: 'table',
      favorite: 1, 
      gamification: 1, 
      newsCategory: "Conflict", 
      newspaper: "Ny Times", 
      source: "boem", 
      url: "http://collection.marijerooze.nl", 
      visualizationtype: "hybrid", 
      comments: 'lalallalalalal',
      date: 20141510
    };

    self.submitForm = function(isValid, data) {
		    //if(!isValid){ return; }

		    console.log( data );
		    //self.addItem( data );
     }

   }]);
})();