let total = 0;

function cambiarCantidad(boton, cambio) {
  const contenedor = boton.parentElement;
  const span = contenedor.querySelector(".cantidad");
  let cantidad = parseFloat(span.textContent);
  cantidad += cambio;
  if (cantidad < 1) cantidad = 1;
  span.textContent = cantidad;
}

function agregarAlCarrito(boton, nombre, precio) {
  const productoDiv = boton.parentElement;
  const cantidad = parseFloat(productoDiv.querySelector(".cantidad").textContent);

  const subtotal = cantidad * precio;
  total += subtotal;

  const item = document.createElement("li");
  item.innerHTML = `${nombre}: ${cantidad} kg - $${subtotal.toFixed(2)} 
    <button class="eliminar" onclick="eliminarItem(this, ${subtotal})">❌</button>`;
  document.getElementById("lista-carrito").appendChild(item);

  document.getElementById("total").textContent = total.toFixed(2);
  mostrarConfirmacion();
}

function eliminarItem(boton, subtotal) {
  const item = boton.parentElement;
  item.remove();
  total -= subtotal;
  document.getElementById("total").textContent = total.toFixed(2);
}

function mostrarConfirmacion() {
  const mensaje = document.getElementById("mensaje-confirmacion");
  mensaje.style.display = "block";
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 2000);
}
