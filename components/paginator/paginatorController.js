(function () {
   'use strict';

   angular
      .module('app')
      .controller('PaginatorController', PaginatorController);

   PaginatorController.$inject = ['myFactory', '$log'];

   function PaginatorController(myFactory, $log) {

      var self = this;

      activate();

      self.totalItems = 64;

      self.currentPage = 4;
      self.setPage = function (pageNo) {
         self.currentPage = pageNo;
      };

      self.pageChanged = function () {
         $log.log('Page changed to: ' + self.currentPage);
      };

      self.maxSize = 5;

      self.bigTotalItems = 175;
      self.bigCurrentPage = 1;


      function activate() {
         myFactory.getJson().then(function (response) {
            self.rowsJson = response;
            self.colsJson = Object.keys(self.rowsJson[0]);
         });

         myFactory.getFrameworks().then(function (response) {
            self.dataRes = response.data;
            self.colDateRes = Object.keys(self.dataRes[0]);
         });

      }


   }

}());