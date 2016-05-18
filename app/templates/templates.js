angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/templates', {
			templateUrl: 'templates/templates.html',
			controller: 'templatesController'
		}).
		when('/templates/:templateId', {
			templateUrl: 'templates/template-details.html',
			controller: 'templateDetailsController'
		});
}])

.controller('templatesController', ['$scope', function($scope) {
	console.log('templateController is running');
}])

.controller('templateDetailsController', ['$scope', function($scope) {
	console.log('templateDetailsController is running');
}])

