(function(module) {

  'use strict';

  var injectParams = ['$scope', '$log', '$route', 'friendsService'];

  var DetailsController = function($scope, $log, $route, friendsService) {

    friendsService.getFriend($route.current.params.friendId).then(function(data) {
      $scope.profile = data;
    });    
  }

  DetailsController.$inject = injectParams;
  module.controller('detailsController', DetailsController);

})(angular.module('friendsApp'));
