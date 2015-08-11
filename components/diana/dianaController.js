(function () {
    'use strict';

    angular
        .module('diana')
        .controller('DianaController', DianaController);

    DianaController.$inject = ['myFactory'];

    function DianaController(myFactory) {

        // Inside my controller code
        var self = this;
        self.name = 'dianita';

        //self.getFrameworks = getFrameworks;
        self.submit = submit;
        self.removeFramework = removeFramework;

      /*  function getFrameworks() {
            myFactory.getFrameworks().then(function (response) {
                console.log('--- response ---');
                console.log(response);
                self.frameworks = response.data;
            });
        }*/

        init();

        function init(){
            myFactory
                .getFrameworks()
                .then(function (response) {
                self.frameworks = response.data;
            });
        }

        function submit() {
            myFactory
                .postFrameworks(self.form)
                .then(init());

        }

        function removeFramework(obj){
            console.log('--- obj ---');
            console.log(obj);
            var index = self.frameworks.indexOf(obj);
            self.frameworks.splice(index, 1);
            //data.id.splice(0,1);
        }

    }

}());
