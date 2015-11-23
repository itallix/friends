(function(module) {

  'use strict';

  var injectParams = ['$http', '$log', '$q'];

  var FriendsService = function($http, $log, $q) {

    var friends = [
      {
          "id": 10,
          "name": "Jonas Jonasson",
          "adress": "Storgatan 10, Karlstad",
          "status": "married",
          "bio": "I work with people, and like ice cream",
          "photo": "http://www.designzzz.com/wp-content/uploads/2012/12/freestock_image_by_goldman555-d495w4s.jpg"

      },
      {
          "id": 11,
          "name": "Elin Johansson",
          "adress": "Midsommarkransen, Stockholm",
          "status": "single",
          "bio": "I work in a kindgarden, but I do not like kids",
          "photo": "http://www.photl.com/images/photos/2010/11/21/1157/wm327624tt.jpg"

      }

    ];

    var service = {
      getFriends: getFriends,
      getFriend: getFriend,
      deleteFriend: deleteFriend
    };

    return service;

    function getFriends() {
      return $http.get('http://private-12625-tinatest.apiary-mock.com/friends').then(function(data) {
        return data.data;
      });
      // var deferred = $q.defer();
      // deferred.resolve(friends);
      // return deferred.promise;
    }

    function getFriend(id) {
      return $http.get('http://private-12625-tinatest.apiary-mock.com/friends/' + id).then(function(data) {
        return data.data;
      });
      // var friend = _(friends).findWhere({id: Number(id)});
      // var deferred = $q.defer();
      // deferred.resolve(friend);
      // return deferred.promise;
    }

    function deleteFriend(id) {
      return $http.delete('http://private-12625-tinatest.apiary-mock.com/friends/' + id).then(function(data) {
        return data.data;
      });
      // friends = _(friends).reject(function(f) { return f.id == id; });
      // var deferred = $q.defer();
      // deferred.resolve(friends);
      // return deferred.promise;
    }

  };

  FriendsService.$inject = injectParams;
  module.factory('friendsService', FriendsService);

})(angular.module('friendsApp'));
