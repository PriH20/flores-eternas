function pedirProducto(producto) {
  function enviarPedido() {
  const nombre = document.getElementById("nombre").value;
  const producto = document.getElementById("producto").value;
  const mensajeTarjeta = document.getElementById("mensaje").value;

  const telefono = "524771429907";

  const mensaje =
    "Hola, quiero hacer un pedido.%0A%0A" +
    "Nombre: " + nombre + "%0A" +
    "Producto: " + producto + "%0A" +
    "Mensaje para tarjeta: " + mensajeTarjeta;

  window.location.href =
    "https://wa.me/" + telefono + "?text=" + mensaje;
}

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
    `Hola, quiero hacer un pedido.%0A%0A` +
    `Nombre: ${nombre}%0A` +
    `Producto: ${producto}%0A` +
    `Mensaje para tarjeta: ${mensajeTarjeta}`;

  window.open(
    `https://wa.me/${telefono}?text=${mensaje}`,
    "_blank"
  );
}
