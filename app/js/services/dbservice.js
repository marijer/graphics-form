(function(){
	'use strict';

		 app.factory('dbService', ['$http', function( $http ){
			var myUrl = '/api/note';

	 		function save( form ){
	 			$http.post( myUrl, form )
					.then(fetchTodos) .then(function(response) {
			        // self.newTodo = {};
			    });
				};

				function get(){
					return $http.get( myUrl )
					.then( function( response ) {
						self.items = response.data; 
					}, function( errResponse ) {
						console.error('Error while fetching notes');
					});
				}
			
			return{
				save: save,
				get: get
			}

	 }]);

})();