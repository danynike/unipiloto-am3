/* Array en JavaScript */
'use strict';

/* objetos y funciones */
var my_object = new Object();//declaracion de objeto
var person = new Object();

var other_object = {};//declaracion de objeto


my_object = {
	firstName: 'Alejandro',
	lastName: 'Romero',
	phone: 1137373
};
//console.log(my_object.firstName);
//console.log(my_object['lastName']);

var key;
for(key in my_object){
	console.log(my_object[key]);
}

//objeto nuevo creado
person = {
	firstName: 'Daniel',
	lastName: 'Moreno',
	identification: 1072422774,
	class: ['diplomado','especia']
};
console.log(person);
for(key in person){
	console.log(key);
	console.log(person[key]);
}

// Funciones
function test(){
	console.log('ejecutando una funcion');
}
test();

// usando funcion anonima
var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}
bye_bye();
