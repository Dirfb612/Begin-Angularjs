(function () {
   'use strict';
   angular
      .module('app')
      .directive('exampleTable', exampleTable);

   exampleTable.$inject = ['$filter'];

   function exampleTable($filter) {
      return {
         restrict: 'E',
         scope: {},
         //compile: compile,
         templateUrl: 'components/exampleDirectives/templateTable.html',
         bindToController: {
            datasource: '=datasource',
            headerTable: '=headerTable'
         },
         controller: exampleTableController,
         controllerAs: 'tableCtrl'
      };

   }

   exampleTableController.$inject = ['$scope', '$filter'];

   function exampleTableController($scope, $filter) {

      console.log('--- $scope ---');
      console.log($scope);

      var self = this;

      self.currentPage = 1;
      self.pageSize = 10;
      self.maxSize = 10;


      $scope.$watchCollection('tableCtrl.datasource', function (datasource) {

         angular.forEach(datasource, function (location, key) {
            self.datasource[key]['Codigo'] = $filter('lowercase')(self.datasource[key]['Codigo']);
         });
      });

   }
}());