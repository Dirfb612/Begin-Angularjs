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
         //compile: compile,
         templateUrl: 'components/exampleDirectives/templateTable.html',
     /*    link: function (scope, element, attrs) {
            scope.$watch('datasource', function (datasource) {
               angular.forEach(datasource, function (location, key) {
                  scope.datasource[key]['Codigo'] = $filter('lowercase')(scope.datasource[key]['Codigo']);
               });
            });
         },*/
         controller: exampleTableController,
         controllerAs: 'exampleTableCtrl'
        // bindToController: true
      };

   }

   exampleTableController.$inject = ['$scope','$filter'];

   function exampleTableController($scope,$filter) {

      $scope.$watchCollection('datasource', function (datasource) {
         console.log('--- datasource controller ---');
         console.log(datasource);
         angular.forEach(datasource, function (location, key) {
            $scope.datasource[key]['Codigo'] = $filter('lowercase')($scope.datasource[key]['Codigo']);
         });


      });


   }
}());