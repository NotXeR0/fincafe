// Mostrar/ocultar menú en celular
document.getElementById("menuBtn").addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// Mostrar datos de transferencia
document.getElementById("btnTransferencia").addEventListener("click", () => {
    document.getElementById("contenido").style.display = "none";
    document.getElementById("transferencia").style.display = "block";
});

// Regresar al inicio
document.getElementById("btnInicio").addEventListener("click", () => {
    document.getElementById("transferencia").style.display = "none";
    document.getElementById("contenido").style.display = "block";
});

// Función de copiar
document.querySelectorAll(".copy").forEach(btn => {
    btn.addEventListener("click", () => {
        navigator.clipboard.writeText(btn.dataset.copy);
        btn.innerText = "¡Copiado!";
        setTimeout(() => btn.innerText = "Copiar", 1500);
    });
});
