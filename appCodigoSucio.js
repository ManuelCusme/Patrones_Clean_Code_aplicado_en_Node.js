const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. FUNCIONES DE CÁLCULO (reglas de negocio)

// Suma el precio de cada producto multiplicado por la cantidad solicitada.
function calcularSubtotal(productos) {
    let subtotal = 0;
    for (const producto of productos) {
        subtotal += producto.precio * producto.cantidad;
    }
    return subtotal;
}

// Aplica el porcentaje de descuento según el rango en el que cae el subtotal.
function calcularDescuento(subtotal) {
    if (subtotal >= 1000) {
        return subtotal * 0.15;
    } else if (subtotal >= 500) {
        return subtotal * 0.10;
    } else if (subtotal >= 100) {
        return subtotal * 0.05;
    } else {
        return 0;
    }
}

// Calcula el IVA sobre el valor que queda después de aplicar el descuento.
function calcularIVA(subtotalConDescuento) {
    return subtotalConDescuento * 0.15;
}

// Determina el costo de envío según la ciudad del cliente.
// Las ciudades no contempladas usan la tarifa general de $15.
function calcularEnvio(ciudad) {
    if (ciudad === "Ambato") {
        return 5;
    } else if (ciudad === "Quito") {
        return 10;
    } else if (ciudad === "Guayaquil") {
        return 12;
    } else {
        return 15;
    }
}

// Combina los importes de la compra para obtener el valor final a pagar.
function calcularTotal(subtotal, descuento, iva, envio) {
    return subtotal - descuento + iva + envio;
}

// 2. FUNCIÓN DE IMPRESIÓN (presentación)

// Muestra en consola los datos del cliente, el detalle de productos y el resumen
// de valores calculados para que el usuario pueda revisar su factura.
function imprimirFactura(cliente, productos, subtotal, descuento, iva, envio, total) {
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

// 3. FUNCIÓN DE NOTIFICACIÓN

// Simula el envío de un correo al cliente con el total de su pedido.
function notificarCliente(email, total) {
    console.log(
        "Enviando correo a " + email +
        " indicando que su pedido tiene un total de $" + total.toFixed(2)
    );
}

// 4. DATOS (entidades)

const cliente = {
    nombre: "Juan Pérez",
    email: "juan@gmail.com",
    ciudad: "Ambato"
};

const productos = [
    { nombre: "Laptop", precio: 850, cantidad: 1 },
    { nombre: "Mouse", precio: 25, cantidad: 2 },
    { nombre: "Teclado", precio: 40, cantidad: 1 }
];

// 5. FLUJO PRINCIPAL (orquestación)

// Las funciones se ejecutan en el orden en que una compra se transforma
// desde sus datos iniciales hasta una factura y una notificación.
const subtotal = calcularSubtotal(productos);
const descuento = calcularDescuento(subtotal);
const subtotalConDescuento = subtotal - descuento;
const iva = calcularIVA(subtotalConDescuento);
const envio = calcularEnvio(cliente.ciudad);
const total = calcularTotal(subtotal, descuento, iva, envio);

imprimirFactura(cliente, productos, subtotal, descuento, iva, envio, total);
notificarCliente(cliente.email, total);

// 6. VALIDACIÓN FINAL (KISS)

// Confirma que el total sea válido y que existan los datos mínimos del cliente.
if (total > 0 && cliente.email !== "" && cliente.nombre !== "") {
    console.log("Pedido procesado correctamente.");
}

rl.close();