(function(){
	'use strict';

	angular.module('app')
	.directive('fileDropzone', [function(){
		return{
			scope: {
					objData: '='
			},
			restrict: 'A',
			templateUrl: 'app/partials/filedropzone.html',
			link: function( $scope, $element, $attrs ){

				$scope.isDragging = false;
				$scope.isEmpty = true;
				$scope.displayWidth = $attrs.displaywidth;

				var reader = new FileReader(),
						validMimeTypes = $attrs.fileDropzone;

				function isValidType( type ){
					return validMimeTypes.length > 0 ? validMimeTypes.indexOf( type ) !== -1 ? true : false : true;
				};

				function isValidSize( size ){
					//return size < maxFileSize;
				};

				function dragAndDropElement( evt ){
						evt.preventDefault();
						evt.dataTransfer.effectAllowed = 'copy'

						$scope.$apply(function(){
							$scope.isDragging = true;
						});
					
				};

				function dragLeave( evt ){
					evt.preventDefault();
					$scope.$apply( function(){
						$scope.isDragging = false;
					});	
				}

				function dropElement( evt ){
					evt.preventDefault();
					var file, name, size, type, lastModifiedDate;


 					reader.onload = function( evt ) {
 						if( isValidType( type ) ){
	              return $scope.$apply(function() {
	                $scope.objData = evt.target.result;
	                $scope.isDragging = false;
	                $scope.isEmpty = false;
	                if ( angular.isString( $scope.fileName ) ) {
	                  return $scope.fileName = name;
	                }
	              });
	          }else{
	          	console.log( 'not a valid type' );
	          }
          };

          reader.onerror = function( evt ) {
					    console.error( "File could not be read! Code " + evt.target.error.code );
					};


	      	file = event.dataTransfer.files[0];
	      	name = file.name;
	      	size = file.size;
	      	type = file.type;
	      	lastModifiedDate = file.lastModifiedDate;

	      	console.log( file.name );

	      	reader.readAsDataURL(file);
				}

				$element.bind( 'dragover' , dragAndDropElement );
      	$element.bind( 'dragenter' , dragAndDropElement );
      	$element.bind( 'dragleave', dragLeave );

      	$element.bind('drop', dropElement);

			}
		};
	}]);
})();