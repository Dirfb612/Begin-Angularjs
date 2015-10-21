(function () {
   'use strict';

   angular
      .module('app')
      .controller('UsersController', UsersController);


   function UsersController($scope) {

      $scope.usuario1 = {
         nombre: 'john',
         apellido: 'Doe',
         email: 'johndoe@example.com'
      };
      $scope.usuario2 = {
         nombre: 'Jane',
         apellido: 'Doe',
         email: 'janedoe@example.com'
      };
   }
}());