(function () {
    'use strict';

    angular
        .module('diana')
        .factory('myFactory', myFactory);

    myFactory.$inject = ['$http', 'API_URL'];

    function myFactory($http, API_URL) {

        console.log('--- $http ---');
        console.dir($http);

        return {
            getFrameworks: getFrameworks,
            postFrameworks:  postFrameworks
        };

        function getFrameworks() {
            return $http.get(API_URL + '/frameworks')
                .success(function (data) {

                })
                .error(function (err) {

                });
        }
        
        function postFrameworks(data) {
            return $http.post(API_URL + '/framework', data).success(function(data) {
                console.log('--- data ---');
                console.log(data)
            })
        }


    }
    
}());
