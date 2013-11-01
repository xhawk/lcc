var lccApp = angular.module('lccApp', []).

/**
 * Either assing controller to the view here or use the ng-controller in the view
 */
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'templates/steps', controller: 'InitialInfoCtrl'});
    $routeProvider.when('/steps', {templateUrl: 'templates/steps', controller: 'InitialInfoCtrl'});
    $routeProvider.when('/report', {templateUrl: 'templates/report', controller: 'InitialInfoCtrl'});
    $routeProvider.when('/addproduct', {templateUrl: 'templates/addproduct', controller: 'AddProductCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
}]);
