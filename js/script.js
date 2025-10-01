let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

function descargarPDF() {
    const a = document.createElement('a');
    a.href = "./pdf/sample-local-pdf.pdf";
    a.download = 'sample-local-pdf.pdf';
    a.click();
}

const saludos = ["¡Hola!", "¡Hey!", "¡Saludos!", "¡Qué tal!", "¡Bienvenido!"];
setInterval(() => {
    const random = Math.floor(Math.random() * saludos.length);
    document.getElementById('autoSaludo').textContent = saludos[random];
}, 2000);