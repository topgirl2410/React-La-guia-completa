'use strict';

// Unir dos objetos

const producto = {
    nombre: "Televisor LCD 45 Pulgadas",
    precio: 450,
    disponible: true
}

const cliente = {
    nombre: "Maria",
    premium: true
}

//const nuevoObjeto = Object.assign(producto, cliente);

const nuevoObjeto1 = {
    producto: { ...producto },
    cliente: { ...cliente }
}

console.log(nuevoObjeto1);