function openMore() {
    var dots = document.getElementById('dots')
    var moreText = document.getElementById('more');
    var moreButton = document.getElementById('moreButton');

    if(dots.style.display === 'none') {
        dots.style.display = 'inline';
        moreButton.innerHTML = 'Mas sobre Nosotros';
        moreText.style.display = 'none'
    } else{
        dots.style.display = 'none'
        moreButton.innerHTML = 'leer menos';
        moreText.style.display = 'inline';
    }
}