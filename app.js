const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Configuraciones que posiblemente algún día se utilizarán
const CONFIGURACION_SISTEMA = {
    modoOscuro: false,
    inteligenciaArtificial: false,
    blockchain: false,
    soporteBitcoin: false,
    enviarWhatsApp: false,
    exportarExcel: false
};

let clienteNombre = "Juan Pérez";
let clienteEmail = "juan@gmail.com";
let clienteCiudad = "Ambato";

let producto1 = "Laptop";
let precio1 = 850;
let cantidad1 = 1;

let producto2 = "Mouse";
let precio2 = 25;
let cantidad2 = 2;

let producto3 = "Teclado";
let precio3 = 40;
let cantidad3 = 1;

let subtotal1 = precio1 * cantidad1;
let subtotal2 = precio2 * cantidad2;
let subtotal3 = precio3 * cantidad3;
let subtotal = subtotal1 + subtotal2 + subtotal3;

console.log("==================================");
console.log(" SISTEMA TECHSTORE");
console.log("==================================");
console.log("Cliente: " + clienteNombre);
console.log("Email: " + clienteEmail);
console.log("Ciudad: " + clienteCiudad);
console.log("----------------------------------");
console.log(producto1 + " x " + cantidad1 + " = $" + subtotal1);
console.log(producto2 + " x " + cantidad2 + " = $" + subtotal2);
console.log(producto3 + " x " + cantidad3 + " = $" + subtotal3);
console.log("----------------------------------");

let descuento = 0;
if (subtotal >= 1000) {
    descuento = subtotal * 0.15;
} else {
    if (subtotal >= 500) {
        descuento = subtotal * 0.10;
    } else {
        if (subtotal >= 100) {
            descuento = subtotal * 0.05;
        } else {
            descuento = 0;
        }
    }
}

let descuentoParaMostrar = 0;
if (subtotal >= 1000) {
    descuentoParaMostrar = subtotal * 0.15;
} else if (subtotal >= 500) {
    descuentoParaMostrar = subtotal * 0.10;
} else if (subtotal >= 100) {
    descuentoParaMostrar = subtotal * 0.05;
} else {
    descuentoParaMostrar = 0;
}

let subtotalConDescuento = subtotal - descuento;
let iva = subtotalConDescuento * 0.15;

let envio = 0;
if (clienteCiudad === "Ambato") {
    envio = 5;
} else if (clienteCiudad === "Quito") {
    envio = 10;
} else if (clienteCiudad === "Guayaquil") {
    envio = 12;
} else {
    envio = 15;
}

let total = subtotalConDescuento + iva + envio;

console.log("Subtotal: $" + subtotal.toFixed(2));
console.log("Descuento: $" + descuentoParaMostrar.toFixed(2));
console.log("IVA: $" + iva.toFixed(2));
console.log("Envío: $" + envio.toFixed(2));
console.log("TOTAL: $" + total.toFixed(2));
console.log("----------------------------------");

console.log(
    "Enviando correo a " + clienteEmail +
    " indicando que su pedido tiene un total de $" + total.toFixed(2)
);

function convertirPedidoABlockchain() {
    console.log("Convirtiendo pedido a blockchain...");
}

function generarPrediccionConIA() {
    console.log("Analizando comportamiento del cliente con IA...");
}

function pagarConBitcoin() {
    console.log("Conectando con billetera Bitcoin...");
}

console.log("----------------------------------");

if (total > 0 && clienteEmail && clienteNombre) {
    console.log("Pedido procesado correctamente.");
}


rl.close();