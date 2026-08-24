// utils/factura.js
function imprimirFactura(resultado) {
    const { cliente, productos, subtotal, descuento, iva, envio, total } = resultado;

    console.log("==================================");
    console.log(" SISTEMA TECHSTORE");
    console.log("==================================");
    console.log("Cliente: " + cliente.nombre);
    console.log("Email: " + cliente.email);
    console.log("Ciudad: " + cliente.ciudad);
    console.log("----------------------------------");

    for (const producto of productos) {
        const subtotalProducto = producto.precio * producto.cantidad;
        console.log(producto.nombre + " x " + producto.cantidad + " = $" + subtotalProducto);
    }

    console.log("----------------------------------");
    console.log("Subtotal: $" + subtotal.toFixed(2));
    console.log("Descuento: $" + descuento.toFixed(2));
    console.log("IVA: $" + iva.toFixed(2));
    console.log("Envío: $" + envio.toFixed(2));
    console.log("TOTAL: $" + total.toFixed(2));
    console.log("----------------------------------");
}

function notificarCliente(email, total) {
    console.log("Enviando correo a " + email + " indicando que su pedido tiene un total de $" + total.toFixed(2));
}

module.exports = { imprimirFactura, notificarCliente };