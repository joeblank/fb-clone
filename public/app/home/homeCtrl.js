angular.module('fb-clone')
.controller('homeCtrl', function($scope, mainService) {

  $scope.getUser = function() {
    $scope.pic = mainService.users[0];
  }
  $scope.getUser();

  $scope.samplePosts = mainService.samplePosts;
  $scope.postPost = (newPost) => {
    mainService.postPost(newPost);
    $scope.newPost = '';
  }


})
