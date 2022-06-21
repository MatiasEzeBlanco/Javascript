//Operador AND(&&)------------------------------------
//regresa true si ambas condiciones son true
let a = 5;
let valMin= 0, valmax=10;

if(a>=valMin && a<=valmax){
    console.log("Dentro del rango");
}
else{
    console.log("Fuera de rango");
}
//Como dentro del If el condicional izquierdo es verdadero y el derecho tambien,esta dentro del rango.



//Operador logico OR(||)------------------------------------
//regresa true si al menos una condicion es true.

let vacaciones=true , diaDeDescanso=false;
if(vacaciones || diaDeDescanso){
    console.log("El padre puede asistir al partido del hijo");
}
else{
    console.log("El padre esta ocupado");
}

//Operadores ternarios-----------------------------------

// se coloca la condicion,el signo de ? y el valor izquierdo seria el resultado true que nos va a devolver,
//mientras que el lado derecho el resultado que va a devolver si es false la condicion.


let resultado = (3>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 9 ;
resultado = ( numero % 2 == 0) ? "Numero par" : "Numero impar";
console.log( resultado);

