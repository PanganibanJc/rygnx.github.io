// Show the scroll-to-top arrow after scrolling down 100px
window.addEventListener('scroll', function() {
    const scrollTopButton = document.querySelector('.scroll-to-top');
    if (window.scrollY > 100) {
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});

// Smooth scroll to top when the arrow is clicked
document.querySelector('.scroll-to-top').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling effect
    });
});
