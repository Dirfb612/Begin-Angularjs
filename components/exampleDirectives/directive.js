(function () {
   'use strict';

   angular.module('app').directive('tabla', tabla);


   function tabla() {

      return {
         restrict: 'E',
         templateUrl: 'components/exampleDirectives/templateTable.html',
         scope: {},
         bindToController: {
            directivevariable: '='
         },
         controller: function () {
            var vm = this;
            console.log('hola');
            console.log(vm);
            vm.controllerVariable = 'Hi, I am from the controller';
            vm.controllerAdapted = vm.directivevariable + '(ctrl adapted)';
         },
         controllerAs: 'vm'
      }

   }

}());
