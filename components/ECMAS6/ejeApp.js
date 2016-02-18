'use strict';
//object-enhancements-in-es6
/*var color= "red";
 var speed= 10;
 var drive = "go";

 var car = {
 color,
 speed,
 [drive]: () => {
 console.log("vroom");
 }
 };

 console.log(car.color);
 console.log(car.speed);
 car.go();*/


//spread_operator
/*let first=[1,2,3,4];
 let second = [4,5,6];

 function addThreeThings(a,b,c){
 let result = a + b + c;
 console.log(result);
 }
 //first.push(...second);
 //first.push(...second);
 //console.log(first);
 addThreeThings(...first);
 addThreeThings(...second);*/


//Shorthand Properties in ES6

/*let firstName = "John";
 let lastName = "Lindquist";

 var test= {firstName, lastName};

 let person = {firstName, lastName};

 //console.log(person);

 let mascot = "Moose";

 let team = {person, mascot};

 console.log(team);
 console.log('--------------')
 console.log(test);*/

/*
 var salutation = "Hello";
 var place = "planet";
 var greeting = `

 ${salutation},
 You
 Crazy        ${place}

 How
 Are
 You


 `;

 console.log(greeting);

 var x = 1;
 var y = 2;
 var equation = `${ x } + ${ y } = ${ x + y }`;

 console.log(equation);

 function tag(strings, values){
 if(values[0] < 20) {
 values[1] = "awake";
 }

 return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
 }


 var message = tag`It's ${new Date().getHours()} I'm ${""}`;

 console.log(message);*/

/*var greeting = (message, name) => {

   return message + '' + name;
};*/
//var greeting = (message, name) =>  message + '' + name;
var greeting = name =>   'hola ' + name;


//console.log(greeting('hola ', 'diana'));
console.log(greeting('diana'));

