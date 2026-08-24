# 🧹 Refactorización TechStore – Clean Code

**Asignatura:** Patrones de Software · **Tema:** Clean Code aplicado en Node.js
**Principios:** KISS · DRY · YAGNI · Separación de responsabilidades · Modularidad

---

## 📚 Tabla de contenidos

- [📌 Descripción funcional del sistema](#-descripción-funcional-del-sistema)
- [🧾 Problemas encontrados en el código original](#-tabla-de-problemas-encontrados-en-el-código-original)
- [🧩 Aplicación de principios Clean Code](#-aplicación-de-principios-clean-code)
- [🏗️ Separación de responsabilidades y modularidad](#️-separación-de-responsabilidades-y-modularidad)
- [📁 Estructura final de carpetas y archivos](#-estructura-final-de-carpetas-y-archivos)
- [⚙️ Instrucciones de instalación y ejecución](#️-instrucciones-de-instalación-y-ejecución)
- [🧠 Decisiones técnicas relevantes](#-decisiones-técnicas-relevantes)
- [❓ Preguntas de análisis](#-preguntas-de-análisis)
- [👤 Autor](#-autor)

---

## 📌 Descripción funcional del sistema

El sistema **TechStore** permite registrar pedidos de productos, calcular subtotales, aplicar descuentos progresivos, calcular IVA, determinar el costo de envío según la ciudad del cliente, generar una factura en consola y simular el envío de una notificación por correo electrónico.

El programa original funcionaba correctamente, pero presentaba graves problemas de calidad de código que dificultaban su mantenimiento y evolución. Este proyecto documenta el proceso de refactorización aplicando principios de **Clean Code** para mejorar la legibilidad, mantenibilidad y extensibilidad **sin alterar el comportamiento funcional**.

---

## 🧾 Tabla de problemas encontrados en el código original

| N.º | Problema encontrado | Principio afectado | Solución propuesta |
|:---:|----------------------|----------------------|----------------------|
| 1 | Variables con nombres genéricos (`x`, `subtotal1`, `subtotal2`) | Claridad / Legibilidad | Usar nombres descriptivos: `subtotal`, `totalProducto`, etc. |
| 2 | Código duplicado (cálculo de descuento repetido dos veces) | DRY | Crear función `calcularDescuento(subtotal)` y reutilizarla. |
| 3 | Anidamiento excesivo (`if (total > 0) { if (email) { if (nombre) {...} } }`) | KISS | Simplificar con una sola condición usando operadores lógicos (`&&`). |
| 4 | Números mágicos (`0.15`, `1000`, `500`, `100`, `5`, `10`, `12`) | Mantenibilidad | Reemplazar por constantes con nombres claros (`IVA`, `UMBRAL_DESCUENTO_ALTO`, `tarifas`). |
| 5 | Funciones no utilizadas (`convertirPedidoABlockchain`, `generarPrediccionConIA`, `pagarConBitcoin`) | YAGNI | Eliminar completamente. |
| 6 | Objeto de configuración innecesario (`CONFIGURACION_SISTEMA` con flags falsos) | YAGNI | Eliminar, no se usaba. |
| 7 | Productos definidos como variables individuales (`producto1`, `producto2`, `producto3`) | Escalabilidad | Convertir en un arreglo de objetos. |
| 8 | Lógica de negocio mezclada con presentación (cálculos e impresión juntos) | Separación de responsabilidades | Extraer funciones puras y módulos independientes. |
| 9 | Cálculo de envío con múltiples `if-else` | Legibilidad | Reemplazar por un objeto `tarifas` que mapea ciudad → costo. |
| 10 | Falta de modularidad (todo en un solo archivo) | Mantenibilidad | Dividir en carpetas: `models/`, `services/`, `utils/`. |

---

## 🧩 Aplicación de principios Clean Code

### 🟢 KISS (Keep It Simple, Stupid)
- Se simplificó la validación final: de tres `if` anidados a una sola condición con operadores lógicos.
- Se eliminaron estructuras innecesarias como el objeto `CONFIGURACION_SISTEMA`.
- Se reemplazaron múltiples `if-else` para el envío por un objeto `tarifas` más legible.

### 🔁 DRY (Don't Repeat Yourself)
- El cálculo del descuento estaba duplicado en dos bloques idénticos. Se unificó en la función `calcularDescuento(subtotal)`.
- Los cálculos de subtotal por producto se centralizaron dentro del bucle o `reduce`.

### ✂️ YAGNI (You Ain't Gonna Need It)
- Se eliminaron las funciones `convertirPedidoABlockchain()`, `generarPrediccionConIA()` y `pagarConBitcoin()`.
- Se eliminó el objeto `CONFIGURACION_SISTEMA` que contenía flags para funcionalidades inexistentes (`blockchain`, `soporteBitcoin`, `inteligenciaArtificial`, etc.).

---

## 🏗️ Separación de responsabilidades y modularidad

El sistema se organizó en tres capas principales:

| Capa | Módulo | Responsabilidad |
|------|--------|------------------|
| **Models** | `cliente.js` | Definir estructura de un cliente (nombre, email, ciudad). |
| **Models** | `producto.js` | Definir estructura de un producto (nombre, precio, cantidad). |
| **Services** | `descuentoService.js` | Lógica de cálculo de descuento según rangos de subtotal. |
| **Services** | `envioService.js` | Lógica de cálculo de costo de envío según ciudad. |
| **Services** | `pedidoService.js` | Orquestador principal: calcula subtotal, IVA y total, coordinando los demás servicios. |
| **Utils** | `factura.js` | Funciones de presentación: `imprimirFactura()` y `notificarCliente()`. |
| **App** | `app.js` | Punto de entrada: crea datos, llama a `pedidoService` y muestra resultados. |

Esta separación permite:

- ✅ **Pruebas unitarias** aisladas por módulo.
- ✅ **Cambios locales** sin afectar el resto del sistema.
- ✅ **Reutilización** de servicios en otros contextos.

---

## 📁 Estructura final de carpetas y archivos

```
taller-clean-code/
├── app.js
├── package.json
├── README.md
├── models/
│   ├── cliente.js
│   └── producto.js
├── services/
│   ├── pedidoService.js
│   ├── descuentoService.js
│   └── envioService.js
└── utils/
    └── factura.js
```

---

## ⚙️ Instrucciones de instalación y ejecución

### 1️⃣ Clonar o descargar el repositorio

```bash
git clone https://github.com/ManuelCusme/Patrones_Clean_Code_aplicado_en_Node.js.git
```

### 2️⃣ Acceder a la carpeta

```bash
cd Patrones_Clean_Code_aplicado_en_Node.js
```

### 3️⃣ Instalar dependencias

> No hay dependencias externas en este proyecto, pero se deja el comando por convención.

```bash
npm install
```

### 4️⃣ Ejecutar el programa

```bash
node app.js
```

### 5️⃣ Verificar la salida esperada

```
==================================
SISTEMA TECHSTORE
==================================
Cliente: Juan Pérez
Email: juan@gmail.com
Ciudad: Ambato
----------------------------------
Laptop x 1 = $850
Mouse x 2 = $50
Teclado x 1 = $40
----------------------------------
Subtotal: $940.00
Descuento: $94.00
IVA: $126.90
Envío: $5.00
TOTAL: $977.90
----------------------------------
Enviando correo a juan@gmail.com indicando que su pedido tiene un total de $977.90
Pedido procesado correctamente.
```

---

## 🧠 Decisiones técnicas relevantes

- 🔗 **Inyección de dependencias implícita:** los módulos usan `require` directamente entre sí, manteniendo un acoplamiento bajo sin complejidad innecesaria (KISS).
- 🧪 **Funciones puras:** todas las funciones de cálculo (`calcularSubtotal`, `calcularDescuento`, `calcularIVA`, `calcularEnvio`) son puras: dado el mismo input, devuelven el mismo output sin efectos secundarios.
- 🔢 **Constantes centralizadas:** los valores de negocio (umbrales de descuento, porcentajes, IVA, tarifas de envío) se definen como constantes al inicio de cada módulo, facilitando su modificación.
- 🗂️ **Estructura por capas:** separación clara entre datos (`models`), lógica de negocio (`services`) y presentación (`utils`), siguiendo el principio de responsabilidad única.

---

## ❓ Preguntas de análisis

**1. ¿Qué partes del código original incumplían KISS?**

El anidamiento de `if` para validar `total > 0`, `email` y `nombre` era innecesariamente complejo. También el cálculo de envío con múltiples `else if` podía simplificarse con un objeto `tarifas`. Además, el objeto `CONFIGURACION_SISTEMA` con flags falsos añadía ruido sin aportar valor.

**2. ¿Dónde encontró duplicación de código y cómo la eliminó?**

El cálculo del descuento aparecía duplicado: una vez para la variable `descuento` y otra para `descuentoParaMostrar`. Se eliminó creando la función `calcularDescuento(subtotal)` y reutilizándola en ambos lugares.

**3. ¿Qué funcionalidades eliminó aplicando YAGNI?**

Se eliminaron las funciones `convertirPedidoABlockchain()`, `generarPrediccionConIA()` y `pagarConBitcoin()`, junto con el objeto `CONFIGURACION_SISTEMA` que contenía flags como `blockchain`, `soporteBitcoin`, `inteligenciaArtificial`, etc. Ninguna de estas funcionalidades era requerida actualmente.

**4. ¿Qué responsabilidades estaban mezcladas en app.js?**

El archivo original mezclaba:

- Definición de datos (cliente, productos).
- Reglas de negocio (cálculo de subtotal, descuento, IVA, envío).
- Presentación (impresión de factura).
- Notificación (correo simulado).
- Validaciones y flujo de control.

**5. ¿Qué beneficios produjo dividir el sistema en módulos?**

- **Mantenibilidad:** cada módulo tiene una responsabilidad única, facilitando la localización de errores y la aplicación de cambios.
- **Testabilidad:** se pueden probar servicios de forma aislada sin necesidad de ejecutar todo el sistema.
- **Reutilización:** los servicios pueden ser utilizados en otros contextos (ej. una API REST).
- **Legibilidad:** el código es más fácil de entender porque cada archivo es corto y enfocado.

**6. ¿Cuál considera que fue el cambio más importante de la refactorización?**

La separación de responsabilidades y la creación de módulos independientes. Esto transformó un monolito de 100+ líneas en una arquitectura organizada y escalable, donde cada cambio futuro será más seguro y rápido de implementar.

**7. ¿Qué ocurriría si el sistema tuviera 100 productos utilizando el diseño original?**

Con el diseño original, habría que declarar 100 variables para producto, precio y cantidad, y otros 100 cálculos manuales de subtotal. El código sería inmanejable, propenso a errores y completamente insostenible. Con el diseño refactorizado, solo se agregan nuevos objetos al arreglo `productos` sin modificar ninguna función.

**8. ¿Por qué un código con menos líneas no necesariamente significa que sea Clean Code?**

Clean Code no se mide por la cantidad de líneas, sino por la claridad, intención y mantenibilidad. Un código de una sola línea puede ser ilegible si usa operaciones complejas o nombres crípticos. Priorizar la legibilidad, el uso de nombres descriptivos y la separación de responsabilidades es más importante que reducir el número de líneas.

---

## 👤 Autor

**Cusme Vélez Manuel Steven**
Ingeniería en Software – 5to "A"
Patrones de Software
📅 24 de agosto de 2026

---

*Hecho con 💻 y buenas prácticas de Clean Code*