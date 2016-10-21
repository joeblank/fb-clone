angular.module('fb-clone', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: './app/home/home.html',
      controller: 'homeCtrl'
    })





})
