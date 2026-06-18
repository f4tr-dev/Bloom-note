// BloomNote Homepage V2

document.addEventListener("DOMContentLoaded", () => {

    // Animasi saat halaman dimuat
    const sections = document.querySelectorAll(".hero, .feature-card, .preview-card");

    sections.forEach((section, index) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";

        setTimeout(() => {
            section.style.transition = "all .7s ease";
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }, 200 * index);
    });

    // Efek klik tombol
    const button = document.querySelector(".primary-btn");

    button.addEventListener("click", () => {
        alert("🚧 Create Bouquet akan segera hadir!\n\nVersi berikutnya kita akan mulai membuat bouquet sungguhan.");
    });

});
