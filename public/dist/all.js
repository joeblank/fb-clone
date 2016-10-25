'use strict';

angular.module('fb-clone', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
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

  this.users = [{
    firstName: 'Joe',
    lastName: 'Blank',
    profilePic: 'http://uc48.net/europeana/images/fpo_avatar.png',
    friends: []
  }];
});
'use strict';

angular.module('fb-clone').controller('homeCtrl', function ($scope, mainService) {

  $scope.getUser = function () {
    return mainService.users[0].profilePic;
  };
  $scope.getUser();
});
//# sourceMappingURL=all.js.map
