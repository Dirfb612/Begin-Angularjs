/**
 * Created by diana on 13/08/15.
 */
(function () {


   'use strict';

   angular
      .module('diana')
      .controller('EjeController', EjeController);
   EjeController.$inject = ['$http', 'filterFilter'];

   function EjeController($http, filterFilter) {
      var self = this;
   /*   var _selected;

      console.log('--- self ---');
      console.log(self);

      self.selected = undefined;
      self.states = [
         'Alabama',
         'Alaska',
         'Arizona',
         'Arkansas',
         'California',
         'Colorado'];
      // Any function returning a promise object can be used to load values asynchronously
      self.getLocation = function (val) {
         return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
            params: {
               address: val,
               sensor: false
            }
         }).then(function (response) {
            return response.data.results.map(function (item) {
               return item.formatted_address;
            });
         });
      };

      self.ngModelOptionsSelected = function (value) {
         if (arguments.length) {
            _selected = value;
         } else {
            return _selected;
         }
      };

      self.modelOptions = {
         debounce: {
            default: 500,
            blur: 250
         },
         getterSetter: true
      };

      self.statesWithFlags = [{
         'name': 'Alabama',
         'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'
      }, {'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'}, {
         'name': 'Arizona',
         'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'
      }, {'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'}, {
         'name': 'California',
         'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'
      }, {
         'name': 'Colorado',
         'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'

      }];*/

      self.selectedUser = '';

      var users = [{
         name: 'Test user1',
         group: 1
      }, {
         name: 'Test user2',
         group: 1
      }, {
         name: 'Test user3',
         group: 1
      }, {
         name: 'Test user1',
         group: 2
      }, {
         name: 'Test user3',
         group: 2
      }
      ];

      self.getUsers = getUsers;

      function getUsers(search) {
         var filtered = filterFilter(users, search);
         
         console.log('--- filtered ---');
         console.log(filtered);

         var results = _(filtered)
            .groupBy('group')
            .map(function (g) {
               g[0].firstInGroup = true;  // the first item in each group
               return g;
            })
            .flatten()
            .value();
         console.log('--- results ---');
         console.log(results);

         return results;
      }


      self.sortBy = 'Name';
      self.reverse = false;

      self.customers = [
         {name: 'Jhon', city: 'Cali', orderTotal: '7800', joined: '2014-02-01'},
         {name: 'Mafe', city: 'Bogota', orderTotal: '1200', joined: '2014-02-10'},
         {name: 'Merce', city: 'Medellín', orderTotal: '1300', joined: '2014-02-14'}];

      self.doSort = function (propName) {
         self.sortBy = propName;
         self.reverse = !this.reverse;
      };

   }
})();