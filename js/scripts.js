document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("pdfModal");
    const closeModal = document.getElementById("closeModal");
    const pdfViewer = document.getElementById("pdfViewer");

    // Obtener la URL base del sitio
    const baseUrl = window.location.origin;

    document.querySelectorAll(".open-modal").forEach(button => {
        button.addEventListener("click", function() {
            const pdfPath = this.getAttribute("data-pdf");
            const absoluteUrl = `${baseUrl}/${pdfPath}`; // Construye la URL completa

            pdfViewer.src = absoluteUrl;
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
        pdfViewer.src = "";  // Para detener la carga del PDF
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            pdfViewer.src = "";
        }
    });
});
