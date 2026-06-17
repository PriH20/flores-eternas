function pedirProducto(producto) {
  const telefono = "524771429907";
  const mensaje = "Hola, quiero pedir: " + producto;
  const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

  window.location.href = url;
}

function enviarPedido() {
  const nombre = document.getElementById("nombre").value;
  const producto = document.getElementById("producto").value;
  const mensajeTarjeta = document.getElementById("mensaje").value;

  const telefono = "524771429907";

  const mensaje =
    "Hola, quiero hacer un pedido.\n\n" +
    "Nombre: " + nombre + "\n" +
    "Producto: " + producto + "\n" +
    "Mensaje para tarjeta: " + mensajeTarjeta;

  const url = "https://wa.me/" + telefono + "?text=" + encodeURIComponent(mensaje);

  window.location.href = url;
}

function mostrarCatalogo() {
  document.getElementById("contenido").classList.remove("oculto");

  setTimeout(function () {
    document.getElementById("catalogo").scrollIntoView({
      behavior: "smooth"
    });
  }, 100);
}
function toggleMenu() {
  document.getElementById("menu").classList.toggle("oculto");
}
let carrito = [];

function agregarCarrito(producto, precio) {
  carrito.push({ producto, precio });

  document.getElementById("cartCount").textContent = carrito.length;

  alert("Producto agregado al carrito 🛒");
}