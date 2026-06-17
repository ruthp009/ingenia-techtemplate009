// =========================
// VARIABLES GLOBALES
// =========================

let contador = 0;
let total = 0;
let carritoProductos = [];

// =========================
// AGREGAR AL CARRITO
// =========================

function agregarCarrito(nombre, precio, boton){

    contador++;

    document.getElementById("contadorCarrito").textContent = contador;

    carritoProductos.push({
        nombre: nombre,
        precio: precio
    });

    total += precio;

    actualizarCarrito();

    animarAlCarrito(boton);

    mostrarNotificacion(nombre + " agregado al carrito");
}

// =========================
// ACTUALIZAR CARRITO
// =========================

function actualizarCarrito(){

    const lista = document.getElementById("listaCarrito");

    lista.innerHTML = "";

    carritoProductos.forEach((producto, index) => {

        lista.innerHTML += `

        <div class="item-carrito">

            <h4>${producto.nombre}</h4>

            <p>C$ ${producto.precio.toLocaleString()}</p>

            <button onclick="eliminarProducto(${index})">
                Eliminar
            </button>

        </div>

        `;

    });

    document.getElementById("totalCompra").textContent =
        total.toLocaleString();
}

// =========================
// ELIMINAR PRODUCTO
// =========================

function eliminarProducto(index){

    total -= carritoProductos[index].precio;

    carritoProductos.splice(index,1);

    contador--;

    if(contador < 0){
        contador = 0;
    }

    document.getElementById("contadorCarrito").textContent = contador;

    actualizarCarrito();
}

// =========================
// ABRIR CARRITO
// =========================

document.querySelector(".carrito")
.addEventListener("click", function(){

    document
        .getElementById("panelCarrito")
        .classList.add("activo");

});

// =========================
// CERRAR CARRITO
// =========================

function cerrarCarrito(){

    document
        .getElementById("panelCarrito")
        .classList.remove("activo");

}

// =========================
// COMPRAR AHORA
// =========================

function comprarAhora(nombre){

    mostrarNotificacion(
        "Preparando compra de " + nombre
    );

    setTimeout(() => {

        alert(
            "Compra simulada\n\n" +
            nombre +
            "\n\nGracias por comprar en Ingenia Tech Store"
        );

    }, 500);

}

// =========================
// BUSCADOR
// =========================

function buscarProducto(){

    let filtro = document
        .getElementById("buscar")
        .value
        .toLowerCase();

    let productos =
        document.querySelectorAll(".producto");

    productos.forEach(producto => {

        let nombre = producto
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if(nombre.includes(filtro)){

            producto.style.display = "block";

        }else{

            producto.style.display = "none";

        }

    });

}

// =========================
// NOTIFICACIONES
// =========================

function mostrarNotificacion(texto){

    const noti =
        document.getElementById("notificacion");

    noti.textContent = texto;

    noti.classList.add("mostrar");

    setTimeout(() => {

        noti.classList.remove("mostrar");

    }, 2500);

}

// =========================
// ANIMACIÓN AL CARRITO
// =========================

function animarAlCarrito(boton){

    let tarjeta = boton.closest(".producto");

    let imagen = tarjeta.querySelector("img");

    let carrito = document.querySelector(".carrito");

    let clon = imagen.cloneNode(true);

    let imgRect = imagen.getBoundingClientRect();

    clon.classList.add("fly-image");

    clon.style.position = "fixed";
    clon.style.zIndex = "9999";

    clon.style.left = imgRect.left + "px";
    clon.style.top = imgRect.top + "px";

    clon.style.width = "100px";
    clon.style.height = "100px";

    document.body.appendChild(clon);

    let cartRect = carrito.getBoundingClientRect();

    setTimeout(() => {

        clon.style.transition = "all 1s ease";

        clon.style.left = cartRect.left + "px";
        clon.style.top = cartRect.top + "px";

        clon.style.width = "20px";
        clon.style.height = "20px";

        clon.style.opacity = "0";

    }, 10);

    setTimeout(() => {

        clon.remove();

    }, 1000);

}