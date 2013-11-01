var lccApp = angular.module('lccApp', []).

config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'templates/steps', controller: 'InitialInfoCtrl'});
    $routeProvider.when('/steps', {templateUrl: 'templates/steps', controller: 'InitialInfoCtrl'});
    $routeProvider.when('/report', {templateUrl: 'templates/report', controller: 'InitialInfoCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
}]);
