var maddyDeepakApp = angular.module('maddyDeepakApp', [ 'ui.router',
		'ui.bootstrap' ]);

maddyDeepakApp.run(function($rootScope, $location) {
	$rootScope.setActive = function(path) {
		return ($location.path().substr(0, path.length) === path) ? 'active'
				: '';
	};
});