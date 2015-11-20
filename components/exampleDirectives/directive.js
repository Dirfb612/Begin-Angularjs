(function () {
   'use strict';

   angular.module('app').directive('tabla', tabla);

   tabla.$inject = [''];

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
            console.log(vm);
            vm.controllerVariable = 'Hi, I am from the controller';
            vm.controllerAdapted = vm.directivevariable + '(ctrl adapted)';
         },
         controllerAs: 'vm'
      }

   }

}());
