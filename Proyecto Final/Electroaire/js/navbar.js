document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar1');
    
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
