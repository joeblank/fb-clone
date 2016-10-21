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

angular.module('fb-clone').service('mainService', function ($http, $q) {});
'use strict';

angular.module('fb-clone').controller('homeCtrl', function ($scope, mainService) {});
//# sourceMappingURL=all.js.map
