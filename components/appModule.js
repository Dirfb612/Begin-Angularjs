(function () {
   'use strict';

   angular
      .module('app', ['diana','ngRoute','ngAnimate', 'ui.bootstrap'])
      .constant('API_URL', 'http://localhost:1989')
      .config(config);

   config.$inject = ['$routeProvider'];

   function config($routeProvider) {
      $routeProvider
         .when('/', {
            templateUrl: 'components/home/home.html'
         })
         .when('/eje', {
            templateUrl: 'components/diana/eje.html'
         })
         .when('/diana', {
            templateUrl: 'components/diana/diana.html',
            controller: 'DianaController',
            controllerAs: 'diana'
         })
         .when('/ejemplos', {
            templateUrl: 'components/diana/ejemplos/ejemplos.html',
            controller: 'EjeController',
            controllerAs: 'ejec'
         })
         .when('/directives', {
            templateUrl: 'components/exampleDirectives/exampleDirective.html',
            controller: 'UsersController',
            controllerAs: 'UsersCtrl'
         })
         .when('/paginator', {
            templateUrl: 'components/paginator/paginator.html',
            controller: 'PaginatorController',
            controllerAs: 'paginatorCtrl'
         })
         .otherwise({redirectTo: '/'});
   }
}());
