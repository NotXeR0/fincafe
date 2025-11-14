/* POPUP DEL MENÚ */
function mostrarMenu() {
  document.getElementById("menuPopup").style.display = "flex";
}

function cerrarMenu() {
  document.getElementById("menuPopup").style.display = "none";
}

/* ACORDEÓN DE TRANSFERENCIA */
function toggleTransferencia() {
  const box = document.getElementById("transferenciaDatos");

  if (box.style.maxHeight && box.style.maxHeight !== "0px") {
    box.style.maxHeight = "0px";
  } else {
    box.style.maxHeight = box.scrollHeight + "px";
  }
}

/* COPIAR DATOS */
function copiarDatos() {
  const texto = `
Cuenta CLABE: 71518 02830 0069 0387
A nombre de: Luis Fernando Navarro Felix
Banco: Cashi
`;

  navigator.clipboard.writeText(texto);

  alert("Datos copiados ✔️");
}
