app.directive('atariEmulator', ['$location','$timeout',
	function($location,$timeout) {

		var controller = function($scope,$element) {
			console.log('atari emulator controller');
			// init atari emulator
			$scope.initAtariEmulator = function(item){

				// nes file url
				if (item) { $scope.item = item; }
				$scope.file = "/"+$scope.page.site_info.address+"/merged-"+$scope.page.site_info.content.merger_name+"/"+$scope.item.cluster_id+"/data/users/"+$scope.item.channel_address.split('_')[1]+"/"+$scope.item.file_name;
				Javatari.ROM_AUTO_LOAD_URL = $scope.file;
				Javatari.IMAGES_PATH = window.Javatari_IMAGES_PATH || '/' + $scope.page.site_info.address+'/assets/lib/games/javatari/';
				Javatari.start();
			};
		};

		var template =  '<section id="javatari" style="background:transparent;">' +
							'<div style="margin:3px 0 auto 0; position: relative; padding: 5px 0;">' +
							    '<div id="javatari-screen" style="margin: 0 auto; box-shadow: 2px 2px 10px rgb(60, 60, 60);"></div>' +
							    '<div id="javatari-console-panel" style="display:none"></div>' +
							'</div>'+
						'</section>';

		return {
			restrict: 'AE',
			replace:true,
			controller: controller,
			template:template
		}

	}
]);