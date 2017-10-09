var meses=prompt ("escribe el mes que deseas")
var meses;
var d31= "tiene 31 dias";
var d30= "tiene 30 dias";
var d28= "tiene 28 dias";
var vacio= " "

switch(meses){
case "enero": alert(meses+vacio+d31);
break;
case "febrero": alert (meses+vacio+d28);
break;
case "marzo": alert (meses+vacio+d31);
break;
case "abril": alert(meses+vacio+d30);
break;
case "mayo": alert(meses+vacio+d31);
break;
case "junio":alert (meses+vacio+d30);
break;
case "julio": alert (meses+vacio+d31);
break;
case "agosto": alert(meses+vacio+d30);
break;

}