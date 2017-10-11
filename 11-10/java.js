//var numeros = [6,5,3,1,8,7,2,4];
//var numTemp=numeros [0];
//numeros[0]=numeros[i];
 
 //for (var=0; n<=numeros.length-1; n++) {
 	//for(var i=0; i<=numero.length-1; i++){
 	//	if((numero[i]>numero[i+1])){
 	//		temporal=numero[i];
 	//		numero[i]=numero[i+1];
 	//		numero[i+1]=temporal
 	//		console.log(numero);
 	//	}
 //	}
 //}


///////////////////////////////////////////
var numeros = [6,5,3,1,8,7,2,4];
var vuelta ;
var swap=true;



for (var vuelta=0; n<numeros.length-1 && swap; vuelta++) {
	swap=false;
	for(var i=0; i<numero.length; i++) {
		if (numeros[i]>numeros[i+1]){
		var temp=numeros[i];
		numeros[i]=numeros[i+1];
		numeros[i+1]=temp;
		swap=true;

		}
	}
}
console.log("asi es al final"=numeros)
