var ActivitiesApp = {};
var App = angular.module('ActivitiesApp', ['ngRoute']);

App.config(['$routeProvider', function($routeProvider) {	
	$routeProvider.when('/search', {
        templateUrl: 'partials/planSearch.html',
         controller: SearchController
	});
	
	$routeProvider.when('/iap', {
        templateUrl: 'partials/iap.html',
         controller: IapController
	});
	
	$routeProvider.when('/about', {
        templateUrl: 'partials/about.html',
         controller: AboutController
	});
	
	$routeProvider.otherwise({redirectTo: '/search'});
}]);