'use strict';

angular.module('fb-clone', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/sign-in');

  $stateProvider.state('sign-in', {
    url: '/sign-in',
    templateUrl: './app/sign-in/signIn.html',
    controller: 'signInCtrl'
  }).state('home', {
    url: '/home',
    templateUrl: './app/home/home.html',
    controller: 'homeCtrl'
  });
});
'use strict';

angular.module('fb-clone').controller('mainCtrl', function ($scope) {

  $scope.broken = 'body controller is working';
  $scope.es6 = function () {
    alert('sup man');
  };
});
'use strict';

angular.module('fb-clone').service('mainService', function ($http, $q) {
  var _this = this;

  this.users = [{
    firstName: 'Joe',
    lastName: 'Blank',
    profilePic: 'http://uc48.net/europeana/images/fpo_avatar.png',
    friends: []
  }];

  this.samplePosts = [{
    name: 'Dallin',
    post: 'i speed on my scooter!',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  }, {
    name: 'Matt',
    post: 'I like to drive fast',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  }, {
    name: 'Eliza',
    post: 'I want a scooter',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  }, {
    name: 'Beth',
    post: 'i am all about oregon',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  }, {
    name: 'John',
    post: 'ready to retire',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  }, {
    name: 'Claudia',
    post: 'i like to ride my bike',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  }, {
    name: 'Warren',
    post: 'Accountant for life',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  }, {
    name: 'Will',
    post: 'football football football',
    profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
  }];

  this.postPost = function (newPost) {
    _this.samplePosts.unshift({
      name: 'Joe B',
      post: newPost,
      profilePic: 'http://allcartooncharacters.com/wp-content/uploads/2014/10/spongebob-squarepants.jpg'
    });
  };
});
'use strict';

angular.module('fb-clone').controller('homeCtrl', function ($scope, mainService) {

  $scope.getUser = function () {
    $scope.pic = mainService.users[0];
  };
  $scope.getUser();

  $scope.samplePosts = mainService.samplePosts;
  $scope.postPost = function (newPost) {
    mainService.postPost(newPost);
    $scope.newPost = '';
  };
});
'use strict';

angular.module('fb-clone').controller('signInCtrl', function ($scope, mainService) {});
//# sourceMappingURL=all.js.map
