maddyDeepakApp.config(function($stateProvider, $urlRouterProvider,
		$locationProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'homeController',
		controllerAs: 'maddyDeepakAppController'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'views/about.html',
		controller: 'aboutController',
		controllerAs: 'maddyDeepakAppController'
	})
	.state('photography', {
		url: '/photography',
		templateUrl: 'views/photography.html',
		controller: 'photographyController',
		controllerAs: 'maddyDeepakAppController'
	})
	.state('contact', {
		url: '/contact',
		templateUrl: 'views/contact.html',
		controller: 'contactController',
		controllerAs: 'maddyDeepakAppController'
	});
});