document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("pdfModal");
    const closeModal = document.getElementById("closeModal");
    const pdfViewer = document.getElementById("pdfViewer");

    const baseUrl = window.location.origin; // Obtiene la URL base de Vercel o Localhost

    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", function() {
            let pdfPath = this.getAttribute("data-pdf");

            // Codificar correctamente espacios y puntos en la URL
            pdfPath = encodeURI(pdfPath);

            const absoluteUrl = `${baseUrl}/${pdfPath}`;
            pdfViewer.src = absoluteUrl;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
        pdfViewer.src = "";  // Para evitar que siga cargando en segundo plano
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            pdfViewer.src = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtener la URL actual sin parámetros ni hash
    let currentPage = window.location.pathname.split("/").pop();

    // Si la URL está vacía o es "/", se asume "index.html"
    if (currentPage === "" || currentPage === "index.html") {
        currentPage = "index.html";
    }

    // Obtener todos los enlaces del sidebar
    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        let page = link.getAttribute("href");

        // Si la URL coincide con el href del enlace, se marca como activo
        if (currentPage === page) {
            link.classList.add("active");
        }
    });
});