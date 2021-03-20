const parallax1 = document.getElementById('home-content');

window.addEventListener('scroll', function(){
    let offset1 = window.pageYOffset;
    parallax1.style.backgroundPositionY = -offset1 * 0.130 + "px";
    
})
    
const parallax2 = document.getElementById('men-content');

window.addEventListener('scroll', function(){
    let offset2 = window.pageYOffset;
    parallax2.style.backgroundPositionY = -offset2 * 0.2 + "px";
    
})