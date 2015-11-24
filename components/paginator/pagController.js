(function () {
   'use strict';
   angular
      .module('app')
      .controller('contentCtrl', contentCtrl);

   contentCtrl.$inject = ['$scope', 'myFactory'];

   function contentCtrl($scope, myFactory) {

      var self = this;

      /*      self.friends = [
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
       ];*/

      activate();

      self.itemsPerPage = 10;
      self.currentPage = 1;
      self.maxSize = 5;
      self.bigTotalItems = 175;
      self.bigCurrentPage = 1;

      function activate() {
         /*    myFactory.getJson().then(function (response) {

          //  self.friends = response;
          self.colsJson = Object.keys(self.rowsJson[0]);
          });*/

         myFactory.getJson().then(function (response) {
          
            self.friends = response;
            //self.colDateRes = Object.keys(self.dataRes[0]);

            self.totalItems = self.friends.length;

            self.pageCount = function () {
               return Math.ceil(self.friends.length / self.itemsPerPage);
            };

            $scope.$watchCollection('pagCtrl.currentPage + pagCtrl.itemsPerPage', function () {

               var begin = ((self.currentPage - 1) * self.itemsPerPage),
                  end = begin + self.itemsPerPage;
               
               console.log('--- begin ---');
               console.log(begin);
               
               console.log('--- end ---');
               console.log(end);

               self.filteredFriends = self.friends.slice(begin, end);
            });
         });

      }


   }

}());
