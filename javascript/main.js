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

window.addEventListener('scroll', ()=> {
    let menu = document.getElementById('menu-bar');
    let menuInfo = document.getElementById('our-future-menu');
    let scrollOffset = window.pageYOffset;

    if (scrollOffset <=149 || scrollOffset>=150) {
        menu.classList.add('collapsed');
        menu.setAttribute('aria-expanded', 'false');
        menuInfo.classList.remove('show');
        menuInfo.classList.remove('collapsing');
    }
    
})


/*******************Search Bar*********** */
// const searchBar = document.getElementById('searchBar');
// var Artists = document.getElementsByClassName('men-links').namedItem();
// searchBar.addEventListener('keyup', (e) =>{
//    const searches = e.target.value.toLowerCase();
//    console.log(Artists);



// })


function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }