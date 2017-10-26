//math.random () da un numero random ent5re 0 y 9
//math.floor(redondea hacia abajo)
//math.round() cantidad de decimales que queremos para el redondeo
//math.cei() redondea para arriba

function randomHalloween(disfraces){
	var posicion= Math.floor(Math.random())
	return=disfraces[posicion];
};

console.log(randomHalloween(disfraces));