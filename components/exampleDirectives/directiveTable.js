(function () {
   'use strict';
   angular
      .module('app')
      .directive('exampleTable', exampleTable);

   exampleTable.$inject = ['$filter'];

   function exampleTable($filter) {
      return {
         restrict: 'A',
         scope: {
            datasource: '=datasource',
            headerTable: '=headerTable'
         },
         compile: compile,
         //template: '<a href="mailto:{{usuario.email}}">{{usuario}} </a>',
         templateUrl: 'components/exampleDirectives/templateTable.html'

      };

      function compile(tElement, tAttrs, scope) {

         console.log('---  tElement---');
         console.log(tElement);

         return {
            post: post
         };

         function post(scope, element, attrs) {
            console.log('--- scope ---');
            console.log(scope.datasource);

            scope.datasource.forEach(function (prop , item) {
               scope.datasource[item]['time']=$filter('currency')(scope.datasource[item]['time']);
            });

         }

      }

   }
}());