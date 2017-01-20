app.directive('videoListSidebar', [
	function() {

		var template =	'<div class="md-whiteframe-1dp" layout="column">' +
							'<ul>' +
						    	'<li ng-repeat="vid in videos | orderBy:\'-date_added\' track by $index">' +
							    	'<a href="/{{site_address}}/view.html?type=video-c={{vid.channel.address}}v={{vid.video_id}}">{{vid.title}}</a>' +
							    	'<hr/>' +
						    	'</li>' +
							'</ul>' +
						'</div>';

		return {
			restrict: 'AE',
			replace:true,
			template:template
		}

	}
]);