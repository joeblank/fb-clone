angular.module('fb-clone', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/sign-in');

  $stateProvider
    .state('sign-in', {
      url: '/sign-in',
      templateUrl: './app/sign-in/signIn.html',
      controller: 'signInCtrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: './app/home/home.html',
      controller: 'homeCtrl'
    })





})
