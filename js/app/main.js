(function() {

  'use strict';

  angular.module('friendsApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/list', {
                controller: 'listController',
                templateUrl: 'views/list.html'
            })
            .when('/details/:friendId', {
                controller: 'detailsController',
                templateUrl: 'views/details.html'
            })
            .otherwise({
                redirectTo: '/list'
            });
    }]);
})();
