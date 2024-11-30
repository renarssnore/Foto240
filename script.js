document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('header nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gallery lightbox functionality
    const images = document.querySelectorAll('.gallery-container img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const src = img.getAttribute('data-src');
            lightboxImage.src = src;
            lightbox.style.display = 'flex';
        });
    });

    // Close the lightbox
    document.querySelector('.lightbox .close').addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Lazy loading of images
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.getAttribute('data-src');
                image.removeAttribute('data-src');
                observer.unobserve(image); // Stop observing after image is loaded
            }
        });
    });

    lazyImages.forEach(image => {
        imageObserver.observe(image);
    });
});
