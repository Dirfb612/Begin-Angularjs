angular.module('app')
   .directive('firstDirective', [function () {
      return {
         restrict: 'E',
         template: '<p>Esta es la primera directiva</p>',
         replace: true
      };
   }]);