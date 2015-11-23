(function(module) {

  'use strict';

  var injectParams = ['$scope', '$log', '$location', 'friendsService'];

  var ListController = function($scope, $log, $location, friendsService) {

    $scope.select = select;
    $scope.remove = remove;

    friendsService.getFriends().then(function(data) {
      $scope.friends = data;
    })

    function select(id) {
      $location.path('/details/' + id);
    }

    function remove(id) {
      friendsService.deleteFriend(id).then(function(data) {
        $scope.friends = _($scope.friends).reject(function(f) {
          return f.id == id;
        });
      });
    }
  }

  ListController.$inject = injectParams;
  module.controller('listController', ListController);

})(angular.module('friendsApp'));
