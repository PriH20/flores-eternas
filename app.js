const telefono = "4792261793";

function abrirWhatsApp(){
    window.open(
        `https://wa.me/${telefono}`,
        "_blank"
    );
}

function pedirProducto(producto){

    const mensaje =
`Hola 🌹

Me interesa el producto:

${producto}

¿Podrían darme más información?`;

    window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
    );
}

function enviarPedido(){

    const nombre =
    document.getElementById("nombre").value;

    const producto =
    document.getElementById("producto").value;

    const mensajeTarjeta =
    document.getElementById("mensaje").value;

    const mensaje =
`Hola, mi nombre es ${nombre}

Producto: ${producto}

Mensaje para tarjeta:
${mensajeTarjeta}`;

    window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
    );
}