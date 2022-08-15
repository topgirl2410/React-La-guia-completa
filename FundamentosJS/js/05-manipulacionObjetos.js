'use strict';

// Objetos - Manipulación

const producto = {
    nombre: "Televisor LCD 45 Pulgadas",
    precio: 450,
    disponible: true
}

// Object.freeze(producto); - Freeze - No deja modificarlo, no permite añadir ni eliminar;


// Object.seal(producto); - Seal - Solo te deja modificar propiedades existentes, pero no te deja añadir ni eliminar;

// Reescribir un valor 

producto.nombre = "Monitor Curvo LCD"


// Agregar un valor nuevo

producto.imagen = "imagen.jpg"

// Eliminar un valor

delete producto.disponible;

console.table(producto);