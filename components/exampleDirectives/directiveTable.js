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
            headertable: '=headertable',
            columns: '=columns'
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
      self.data = [];

      self.currentPage = 1;
      self.pageSize = 9;
      self.maxSize = 10;
      self.itemsPerPage = 9;

      //access to scope to get the datasource
      $scope.$watchCollection('tableCtrl.datasource', function (datasource) {


         if (datasource !== undefined) {
            self.data = datasource;
         }
         angular.forEach(datasource, function (location, key) {
            self.datasource[key].Codigo = $filter('lowercase')(self.datasource[key].Codigo);
         });

         /*  if (datasource != null) {
          //whatch the currentPage to filter the datasource

          console.log('--- self.data ---');
          console.log(self.data);
          $scope.$watchCollection('tableCtrl.currentPage', function () {

          var begin = ((self.currentPage - 1) * self.pageSize),
          end = begin + self.pageSize;

          console.log('--- begin ---');
          console.log(begin);

          console.log('--- end ---');
          console.log(end);

          self.filteredData = self.data.slice(begin, end);

          });
          }*/


      });


   }
}());