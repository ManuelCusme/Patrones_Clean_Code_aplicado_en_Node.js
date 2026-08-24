// models/cliente.js
function crearCliente(nombre, email, ciudad) {
    return { nombre, email, ciudad };
}

module.exports = { crearCliente };