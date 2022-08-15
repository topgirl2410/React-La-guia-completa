'use strict';

// Objetos - Destructuring con dos o más objetos

const producto = {
    nombre: "Televisor LCD 45 Pulgadas",
    precio: 450,
    disponible: true
}

const cliente = {
    nombre: "Maria",
    premium: true
}


const { nombre, precio, disponible } = producto;
const { nombre: nombreCliente, premium } = cliente;

console.log(nombre);
console.log(nombreCliente);