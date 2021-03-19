const parallax = document.getElementById('content');

window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = -offset * 0.2 + "px";
    
})
    