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

.controller('templatesController', ['$scope','$http', function($scope, $http) {
	console.log('templateController is running');
	$http.get("json/templates.json").success(function(response) {
		$scope.templates = response;
	})
}])

.controller('templateDetailsController', ['$scope','$http','$routeParams', '$filter', function($scope, $http, $routeParams, $filter) {
	console.log('templateDetailsController is running');
	var templateId = $routeParams.templateId;
	$http.get('json/templates.json').success(function(response) {
		$scope.template = $filter('filter')(response, function(element) {
			return element.id == templateId;
		})[0];
		$scope.mainImage = $scope.template.images[0].name;
	});
	$scope.setImage = function(image) {
		$scope.mainImage = image.name;
	}
}])



