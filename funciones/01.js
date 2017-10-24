/*funcion tiene parametros que ser cualquier tipo de dato, necesita ser definida mediante la palabra function elnombredelafuncion(parametros,parametros) {}*/

////ejercicio 1
function potencia (/*base*/base, /*potencia*/exponente){
	var resultado=1;/*variable local, solo sirve dentro de la funcion*/
	for (i=0;i<exponente;i++) {
		resultado=resultado*base; //igualo para ir cambiando el valor de la variable
	}
return resultado;
}

var operacion= potencia (5,2);

console.log (operacion);
/* si pongo console.log (resultado); no lo voy a ver porque esta dentro de la funcion*/