// Code goes here

angular
   .module('app')
   .controller('contentCtrl', function ($scope) {

      var self = this;

      self.friends = [
         {'name': 'Jack'},
         {'name': 'Tim'},
         {'name': 'Stuart'},
         {'name': 'Richard'},
         {'name': 'Tom'},
         {'name': 'Frank'},
         {'name': 'Ted'},
         {'name': 'Michael'},
         {'name': 'Albert'},
         {'name': 'Tobby'},
         {'name': 'Mick'},
         {'name': 'Nicholas'},
         {'name': 'Jesse'},
         {'name': 'Lex'},
         {'name': 'Robbie'},
         {'name': 'Jake'},
         {'name': 'Levi'},
         {'name': 'Edward'},
         {'name': 'Neil'},
         {'name': 'Hugh'},
         {'name': 'Hugo'},
         {'name': 'Yanick'},
         {'name': 'Matt'},
         {'name': 'Andrew'},
         {'name': 'Charles'},
         {'name': 'Oliver'},
         {'name': 'Robin'},
         {'name': 'Harry'},
         {'name': 'James'},
         {'name': 'Kelvin'},
         {'name': 'David'},
         {'name': 'Paul'}
      ];

      self.totalItems = self.friends.length;
      self.itemsPerPage = 10
      self.currentPage = 1;

      // $scope.setPage = function (pageNo) {
      //   $scope.currentPage = pageNo;
      // };

      // $scope.pageChanged = function() {
      //   console.log('Page changed to: ' + $scope.currentPage);
      // };

      self.maxSize = 5;
      self.bigTotalItems = 175;
      self.bigCurrentPage = 1;

      self.pageCount = function () {
         return Math.ceil(self.friends.length / self.itemsPerPage);
      };

      $scope.$watch('pagCtrl.currentPage + pagCtrl.itemsPerPage', function () {
         var begin = ((self.currentPage - 1) * self.itemsPerPage),
            end = begin + self.itemsPerPage;

         self.filteredFriends = self.friends.slice(begin, end);
      });
   });
