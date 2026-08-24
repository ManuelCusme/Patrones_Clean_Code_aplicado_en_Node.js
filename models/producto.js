// models/producto.js
function crearProducto(nombre, precio, cantidad) {
    return { nombre, precio, cantidad };
}

module.exports = { crearProducto };