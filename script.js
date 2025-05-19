let total = 0;

function agregarAlCarrito(nombre, precio) {
  const cantidad = parseFloat(prompt(`¿Cuántos kilos/libras de ${nombre} quieres?`));
  if (cantidad > 0) {
    const subtotal = cantidad * precio;
    total += subtotal;

    const item = document.createElement("li");
    item.textContent = `${nombre}: ${cantidad}kg - $${subtotal.toFixed(2)}`;
    document.getElementById("lista-carrito").appendChild(item);

    document.getElementById("total").textContent = total.toFixed(2);
  }
}
