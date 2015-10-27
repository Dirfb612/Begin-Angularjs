angular
   .module('app')
   .directive('changeCase', function () {
   return {
      restrict: 'A',
     // templateUrl: 'components/validators/ejemploValidatorTemplate.html',
      require: 'ngModel',
      link: function (scope, element, attr, ngModel) {

         ngModel.$formatters.push(function(value){
            value.toUpperCase();
            return value;
         });

         /*ngModel.$parsers.push(function (value) {

         });*/
         ngModel.$parsers.push(function(value){
            value.toUpperCase();
            return value;
         });

      }
   };
});