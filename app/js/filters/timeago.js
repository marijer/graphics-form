app.filter('timeAgo', [function(){
	var ONE_SECOND  =	1000,
			ONE_MINUTE  = ONE_SECOND * 60,
			ONE_HOUR    = ONE_MINUTE * 60,
			ONE_DAY     = ONE_HOUR * 24,
			ONE_MONTH   = ONE_DAY * 30,
			ONE_YEAR		= ONE_DAY * 365,
			ONE_DECADE	= ONE_YEAR * 10;

		return function( ts ){
			var currentTime = new Date().getTime(),
				  diff = currentTime - ( ts.getTime() ),
				  total, str;

			switch( true ){
				case ( diff < ONE_MINUTE ):
					total = Math.floor( diff / ONE_SECOND);
					str = 'seconds ago';
					break;
				case ( diff < ONE_HOUR ):
					total = Math.floor( diff / ONE_MINUTE);
					str = 'minutes ago';
					break;
				case ( diff < ONE_DAY ):
					total = Math.floor( diff / ONE_HOUR);
					str = 'hours ago';
					break;
				case ( diff < ONE_MONTH ):
					str = 'days ago';
				case ( diff < ONE_YEAR ):
					total = Math.floor( diff / ONE_MONTH);
					str = 'months ago';
					break;
				case ( diff < ONE_DECADE ):
					total = Math.floor( diff / ONE_YEAR);
					str = 'years ago';
					break;
				default:
					total = 'a long long';
					str = 'time ago';
				}

				return total + ' ' + str;
		}
}]);