/* Array en JavaScript */
'use strict';
/* Uso de funciones, variables y estructuras de control */

var a, b;

a = Number(prompt("Digite el numero a: "));
b = Number(prompt("Digite el numero b: "));
//document.write( a );

var sum_numbers = function(){
	if(a > b)
		alert('Resultado: '+(a+b));
	else if(a < b)
		alert('Resultado: '+(a*b));
	else if(a === b)
		alert('Resultado: '+(a/b));
}


$.ajax({          
	type:  'POST',
	url:   'http://www.worldtimeserver.com/handlers/GetData.ashx?action=GCTData',
	dataType: 'jsonp',              
    success: function(data){
		console.log(data.ThisTime);
	}
 });
				
