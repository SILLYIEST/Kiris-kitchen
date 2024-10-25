let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function moveSlide(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    showSlide(currentIndex);
}

// Show the first image initially
showSlide(currentIndex);
