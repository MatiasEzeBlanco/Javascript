//Convertir string a numero

let miNumero= "17";
//console.log(typeof miNumero);

//La funcion "number" nos permite convertir un string en un numero.
let edad = Number(miNumero);
//console.log(typeof edad);

if(edad >= 18){
    console.log("Puede votar");
}
else{
    console.log("No puede votar");
}

//Mismo ejercicio pero con Operacion Ternaria.
let resultado= (edad>=18) ? "puede votar" : "no puede votar";
console.log(resultado);


//Ejemplo de Incremento y decrementos

let x = 5 ;
let y = 10;
let z = ++x + y--;

console.log(x);
console.log(y);
console.log(z);
/* En "z", se suma 1 a "x" osea queda en 6,luego ese resultado se suma a "y",pero queda pendiente el decremento
por eso cuando imprimimos "y" de nuevo da 9 y no 10 y "z" por tal motivo resulta 16*/
