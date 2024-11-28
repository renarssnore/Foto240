
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('header nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
    