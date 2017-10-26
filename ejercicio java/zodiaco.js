/*var tierra = ["carpico+7rnio", "tauro", "virgo"];
var aire= ["cancer", "escorpio", "piscis"];
var fuego=["libra", "acuario","geminis"];
var agua=["aries", "leo", "sagitario"];

function t(){tierra.push();
tierra.push();

}
console.log(t(tierra)) */


var signos= [["capricornio","tauro","virgo"], ["cancer","escorpio","piscis"], ["libra", "acuario","geminis"], ["aries","leo","acuario"]];

/*console.log("los signos de tierra son: ",signos[0]);
console.log("los signos de aire son: ", signos[1]);
console.log("los signos de fuego son: ",signos[2]);
console.log("los signos de agua son: ",signos[3]);*/

for(i=0; i<signos.length;i++){
	var elementos
	switch(i){
		case 0: elementos="tierra";
	break;
case 1: elementos="aire";
break;


case 2: elementos="fuego";
break;

case 3: elementos="agua";
break;}
console.log(elementos);

	for (j=0; j<signos[i].length;j++){
		console.log(signos[i][j]);
	}

}

