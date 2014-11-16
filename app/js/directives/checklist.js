(function(){

	'use strict';

	angular.module('app')
		.directive('checkList', function() {
	  return {
	    scope: {
	      list: '=checkList',
	      value: '@'
	    },
	    link: function( scope, elem, attrs ) {

	      var handler = function( setup ) {
	        var checked = elem.prop( 'checked' ),
	      			index = scope.list.indexOf( scope.value );

	        if( checked && index === -1 ){
	        	scope.list += scope.value + ', ';
	        } else if ( !checked ){
	        	if( setup && index !== -1 ){
	        		elem.prop( 'checked', true );
	        	} else {
	        		scope.list = scope.list.replace( scope.value, '');
	        	}
	        }
	      };
	      
	      var setupHandler = handler.bind( null, true );
	      var changeHandler = handler.bind( null, false );
	            
	      elem.on('change', function() {
	        scope.$apply(changeHandler);
	      });

	      scope.list = scope.list || '';
	      scope.$watch('list', setupHandler, true);
	    }
	  };
});

})();