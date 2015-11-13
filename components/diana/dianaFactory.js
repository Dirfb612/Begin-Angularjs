(function () {
   'use strict';

   angular
      .module('diana')
      .factory('myFactory', myFactory);

   myFactory.$inject = ['$http', 'API_URL', '$q'];

   function myFactory($http, API_URL, $q) {

      console.log('--- $http ---');
      console.dir($http);

      return {
         getFrameworks: getFrameworks,
         postFrameworks: postFrameworks,
         getSymbols: getSymbols,
         getJson:getJson
      };

      function getFrameworks() {
         return $http.get(API_URL + '/frameworks')
            .success(function (data) {

            })
            .error(function (err) {

            });
      }

      function postFrameworks(data) {
         return $http.post(API_URL + '/framework', data)
            .success(function (data) {
               console.log('--- data ---');
               console.log(data)
            })
      }

      function getSymbols() {

         return $http.get(API_URL + '/symbols')
            .success(function (datos) {

               console.log('--- datos ---');
               console.dir(datos);

            });
      }

      function getJson() {

         return $q(function (resolve, reject) {
            $http({
               url: API_URL + '/assets/bigJSON',
               method: 'GET'
            }).then(function (promise) {
               resolve(promise.data);
            }, function (reason) {
               reject(reason);
            })
         });

      }


   }

}());
