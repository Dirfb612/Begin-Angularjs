
/**
 * Created by diana on 13/08/15.
 */
(function(){


'use strict';

angular
    .module('diana')
    .controller('EjeController', EjeController);

function EjeController(){

    this.sortBy='Name';
    this.reverse=false;

    this.customers=[
        { name:'Jhon',city:'Cali',orderTotal:'7800',joined:'2014-02-01'},
        { name:'Mafe',city:'Bogota',orderTotal:'1200',joined:'2014-02-10'},
        { name:'Merce',city:'Medellín',orderTotal:'1300',joined:'2014-02-14'}];

    this.doSort=function(propName){
        this.sortBy=propName;
        this.reverse=!this.reverse;
    };

}
})();