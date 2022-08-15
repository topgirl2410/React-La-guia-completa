'use strict';

// Objetos

const producto = {
    nombre: "Tablet",
    precio: 250,
    disponible: true
}

console.table(producto);
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

// Destructuring
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);