const carouselParallax = document.querySelector('header');

window.addEventListener('scroll', function(){
    let carouselOffset = window.pageYOffset;
    carouselParallax.style.backgroundPositionY = carouselOffset * 0.4+ "px";
    
})

    

function splitScroll(){
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-us',
        triggerHook: 0
    })
        .setPin('.about-us')
        .addTo(controller);
}

splitScroll();