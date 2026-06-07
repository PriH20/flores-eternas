function pedirProducto(producto) {
    const telefono = "5214771422907";

    const mensaje = `Hola, me interesa el producto: ${producto}`;

    window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
    );
}