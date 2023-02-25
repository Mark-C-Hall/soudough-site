/**
 * Home slideshow functions
 */
let slideIndex = 0;
showSlides();

// Infinite recursive function is called once every 5 seconds
function showSlides() {
    const slides = document.querySelectorAll(".slides");
    slides.forEach(slide => {
        slide.style.display = "none";
    })

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}