(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'diana'])
        .constant('API_URL', 'http://192.168.80.26:1989')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl: 'components/home/home.html'
            })
            .when('/eje',{
              templateUrl:'components/diana/eje.html'
            })
            .when('/diana',{
                templateUrl: 'components/diana/diana.html',
                controller: 'DianaController',
                controllerAs: 'diana'
            })
            .when('/ejemplos',{
                templateUrl:'components/diana/ejemplos/ejemplos.html',
                controller: 'EjeController',
                controllerAs:'ejec'
            })
            .otherwise({ redirectTo: '/' });
    }
}());