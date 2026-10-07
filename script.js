document.addEventListener("DOMContentLoaded", () => {

    console.log("Sitio web cargado correctamente.");

    const cards = document.querySelectorAll(
        ".card, .tech-card"
    );

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {
            card.style.cursor = "pointer";
        });

    });

});