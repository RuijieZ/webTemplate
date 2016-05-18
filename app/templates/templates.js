angular.module('templateStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/templates', {
			templateUrl: 'templates/templates.html',
			controller: 'templatesController'
		});
}])

.controller('templatesController', ['$scope', function($scope) {
	console.log('templateController is running');
}]);