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

      $scope.rows = [
         {
            "branch": "default",
            "comment": "",
            "name": "20141228.150706",
            "score": "0.45000",
            "time": "0.02"
         },
         {
            "branch": "default",
            "comment": "",
            "name": "20141226.022147",
            "score": "0.56000",
            "time": "6.00"
         },
         {
            "branch": "default",
            "comment": "",
            "name": "20141226.022112",
            "score": "0.56000",
            "time": "3.00"
         },
         {
            "branch": "default",
            "comment": "",
            "name": "20141226.021955",
            "score": "0.55000",
            "time": "3.00"
         },
         {
            "branch": "default",
            "comment": "",
            "name": "20141226.021920",
            "score": "0.49000",
            "time": "10.00"
         }];
      $scope.cols = Object.keys($scope.rows[0]);
      
      console.log('--- $scope.cols ---');
      console.log($scope.cols);
   }
}());