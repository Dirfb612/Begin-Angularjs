(function () {
   'use strict';

   angular
      .module('app')
      .controller('UsersController', UsersController);


   function UsersController($scope) {

      $scope.usuario1 = {
         nombre: 'john',
         apellido: 'Doe',
         email: 'johndoe@example.com',
         price: '1000000'
      };
      $scope.usuario2 = {
         nombre: 'Jane',
         apellido: 'Doe',
         email: 'janedoe@example.com',
         price: '1000000'
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
            "branch": "diana",
            "comment": "hola soy diana",
            "name": "dipro",
            "score": "10",
            "time": "6.00"
         },
         {
            "branch": "jero",
            "comment": "",
            "name": "blackend",
            "score": "5000",
            "time": "3.00"
         },
         {
            "branch": "mateo",
            "comment": "re lol",
            "name": "lol",
            "score": "1000",
            "time": "3.00"
         },
         {
            "branch": "abracu",
            "comment": "crm",
            "name": "novation",
            "score": "10.000",
            "time": "10.00"
         }];


      //   $scope.cols = Object.keys($scope.rows[0]);
         $scope.cols = {
       "branch": "Rama  ",
       "comment": "Hola jero tas bien?",
       "name": "Nombre",
       "score": "Rango",
       "time": "Tiempo"
       };
/*      $scope.colsw = {
         "Rama": "branch",
         "commen": "comment",
         "Nombr": "name",
         "Rango": "score",
         "Tiempo": "time"
      };
     $scope.cols = Object.keys($scope.colsw[1]);*/
/*
      console.log('--- $scope.cols ---');
      console.log($scope.cols);*/
   }
}());