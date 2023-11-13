/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
  
    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
  });
  
  /* Slide en Sección beneficios index page */
  const images = document.querySelectorAll("#slider img");
          let currentImage = 0;
  
          function nextImage() {
              images[currentImage].style.opacity = 0;
              currentImage = (currentImage + 1) % images.length;
              images[currentImage].style.opacity = 1;
          }
  
          // Mostrar la primera imagen y configurar el intervalo
          images[currentImage].style.opacity = 1;
          setInterval(nextImage, 3000);