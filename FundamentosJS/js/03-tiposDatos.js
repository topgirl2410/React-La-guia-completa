'use strict';

// Tipos de Datos - Undefined(desde el momento en que creas una variable es undefined hasta que le asignas un valor)

let cliente; // Undefined

cliente = 20; // Tipo Number

console.log(cliente);
console.log(typeof cliente);

// Tipo de Datos - Boolean (Verdadero o Falso);

const descuento = true;

console.log(descuento);
console.log(typeof descuento);

// Tipo de Datos - Number

const num1 = 20.20;
const num2 = 30;
const num3 = -45;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

// Tipo de Datos - Strings o Cadenas de Texto

const alumno = "Marco";
let producto = 'Monitor 11 Pulgadas';

const numero = 30;
const numero1 = "30";


console.log(alumno);
console.log(producto);

console.log(typeof numero);
console.log(typeof numero1);

// Tipo de Datos - BigInt

const numeroGrande = BigInt(3156478754654878745464456787414);

console.log(typeof numeroGrande);

// Tipo de Datos - Symbol(los symbols siempre son diferentes);

const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

console.log(primerSymbol === segundoSymbol);

console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());

// Tipo de Datos - Null

const descuento1 = null;

console.log(typeof descuento1);

