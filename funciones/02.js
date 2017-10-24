/*function primos (num){


	for (i=2;i<num;i++) {
if(num % i == 0) {return true

	}
	return false;
};
var pri= primos (7);
console.log (pri);*/

function primos (n){
	if (n===1){
		
		return false;
	}
	else if (n===2){
		
		return true;
	} else {
		for (var x=2; x<n; x++){
			if (n% x===0){
				
				return false;
			}
		
		}
	
	return true;

	}

}

console.log(primos(7));