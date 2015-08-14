(function () {
    'use strict';

    angular
        .module('diana')
            .controller('DianaController', DianaController);

    DianaController.$inject = ['myFactory'];

    function DianaController(myFactory) {

        // Inside my controller code
        var self = this;
        self.name = 'Mundo';

        //self.getFrameworks = getFrameworks;
        self.submit = submit;
        self.removeFramework = removeFramework;
        self.getPrecioMayor = getPrecioMayor;

        /*  function getFrameworks() {
         myFactory.getFrameworks().then(function (response) {
         console.log('--- response ---');
         console.log(response);
         self.frameworks = response.data;
         });
         }*/

        init();

        function init() {
            myFactory
                .getFrameworks()
                .then(function (response) {
                    self.frameworks = response.data;
                });
            getSymbols();
        }

        function submit() {
            myFactory
                .postFrameworks(self.form)
                .then(init());

        }

        function removeFramework(obj) {
            console.log('--- obj ---');
            console.log(obj);
            var index = self.frameworks.indexOf(obj);
            self.frameworks.splice(index, 1);
            //data.id.splice(0,1);
        }

        function getSymbols() {
            myFactory
                .getSymbols()
                .then(function (res) {
                    self.symbols = res.data;
                    self.precios = getPrecioMayor(res.data, 150.00);
                });



        }

        function getPrecioMayor(simbolos, min) {

            // forEach
           /* var resultados = [];
            simbolos.forEach(function(simbolo) {
                resultados.push(simbolo.symbol);
            });
            return resultados*/

            // map
           /* return simbolos.map(function(simbolo) {
                return simbolo.symbol
            });*/

            // filter
            return simbolos.filter(function(simbolo) {
                return simbolo.price > min;
            });

        }


    }

}());
