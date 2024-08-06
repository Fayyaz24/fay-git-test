
window.addEventListener('scroll', function() {
    let parallaxElements = document.querySelectorAll('.parallax');
    let scrollPosition = window.pageYOffset;

    parallaxElements.forEach(function(el) {
        let speed = el.dataset.speed;
        el.style.backgroundPositionY = (scrollPosition * speed) + 'px';
    });
});
