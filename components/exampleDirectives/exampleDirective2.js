angular
   .module('app')
   .directive('info', [function () {
      return {
         restrict: 'A',
         scope: {
            usuario: '='
         },
         template: '<a href="mailto:{{usuario.email}}">{{usuario.nombre}} {{usuario.apellido}}</a>',
         replace: true
      };
   }]);