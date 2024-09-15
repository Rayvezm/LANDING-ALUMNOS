// Escucha el contenedor padre (event delegation)
document
.getElementById('imageContainer')
.addEventListener('click', function (event) {
  // Verifica si el clic fue en una imagen
  if (event.target.tagName === 'IMG') {
    // Extrae la imagen clicada
    var imageSrc = event.target.src;

    // Extrae el título (h3 hermano de la imagen)
    var title = event.target.previousElementSibling.textContent;

    // Establece el contenido de la modal
    document.getElementById('imageModalLabel').textContent = title;
    document.getElementById('modalImage').src = imageSrc;

    // Muestra la modal
    var myModal = new bootstrap.Modal(
      document.getElementById('imageModal'),
    );
    myModal.show();
  }
});