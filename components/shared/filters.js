(function () {
   'use strict';

   angular
      .module('app')
      .filter('startFrom', startFrom);

   function startFrom() {

      return function (dataGet, start) {

         return dataGet.slice(start);
      }
   }

}());
