//Precedencia de operadores
let a = 3 , b = 2 , c= 1 , d=4;

let z = a * b + c / d;

console.log(z);

z= c + a * b / d;
console.log(z);

z= (c + a) * b / c;
console.log(z);
//--------------------------------

//Operadores de asignacion
a += 2; // es igual a decir: a = a + 2;
console.log(a);
a -= 3; //es igual a decir : a= a - 3;
console.log(a);
a *= 2;
console.log(a);
a /= 2;
console.log(a);
//--------------------------------
//Operadores de comparacion
a = 3, b= 2, c="3", z=0;

z = a == c; //revisa los valores pero sin importar el tipo,a es un int,c un string pero realiza la conversion y el resultado es true.
console.log(z);

z= a===c; //revisa los valores pero tambien los tipos,en este caso no realiza la conversion xq tambien evalua los tipos de datos y el resultado es false.
console.log(z);

z= a != c; //revisa los valores pero sin importar el tipo,a es un int,c un string pero realiza la conversion y el resultado es falso porque a=3 y c tambien asi que no son diferentes.
console.log(z);

z= a !== c; //revisa los valores pero tambien el tipo,a es un int,c un string pero realiza la conversion y el resultado es true ya que SI son diferentes.
console.log(z);
//-----------------------------------

