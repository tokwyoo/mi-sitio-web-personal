function descargarPDF() {
    const a = document.createElement('a');
    a.href = "./pdf/sample-local-pdf.pdf";
    a.download = 'sample-local-pdf.pdf';
    a.click();
}

const saludos = [
    "Bienvenido",
    "Bienvenida",
    "Gracias por visitar",
    "Nuestro portafolio",
    "Nuestra experiencia"
];

let index = 0;

setInterval(() => {
    document.getElementById('autoSaludo').textContent = saludos[index];
    index = (index + 1) % saludos.length;
}, 2500);

