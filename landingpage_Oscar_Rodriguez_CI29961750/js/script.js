// Abrir el modal
document.getElementById('cta-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
});

// Cerrar el modal al hacer clic en el botón de cerrar
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de la ventana modal
window.addEventListener('click', function(e) {
    if (e.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});