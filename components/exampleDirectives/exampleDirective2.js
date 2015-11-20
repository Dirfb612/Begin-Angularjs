angular
   .module('app')
   .directive('info', [function () {
      return {
         restrict: 'A',
         scope: {
            usuario: '='
         },
         //template: '<a href="mailto:{{usuario.email}}">{{usuario}} </a>',
         template: '<span >{{usuario.price | currency}} </span>',
         replace: true
      };
   }]);