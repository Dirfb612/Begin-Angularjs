(function () {
   'use strict';

   angular
      .module('app')
      .filter('startFrom', startFrom);

   function startFrom() {

      return function (dataGet, currentPage) {

         var pageSize=10;

         var begin = (currentPage - 1) * pageSize;
         var end = begin + pageSize;

         return dataGet.slice(begin, end);
      }
   }

}());
