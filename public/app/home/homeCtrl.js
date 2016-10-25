angular.module('fb-clone')
.controller('homeCtrl', function($scope, mainService) {

  $scope.getUser = function() {
    return mainService.users[0].profilePic;
  }
  $scope.getUser();


})
