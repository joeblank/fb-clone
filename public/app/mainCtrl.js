angular.module('fb-clone')
.controller('mainCtrl', function($scope) {

$scope.broken = 'body controller is working';
$scope.es6 = () => {
  alert('sup man');
}

})
