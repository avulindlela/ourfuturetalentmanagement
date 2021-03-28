const carouselParallax = document.querySelector('header');

window.addEventListener('scroll', function(){
    let carouselOffset = window.pageYOffset;
    carouselParallax.style.backgroundPositionY = carouselOffset * 0.4+ "px";
    
})

    

function splitScroll(){
    const controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.scrollTrigger',
        triggerHook: 0
    })
        .setPin('.scrollTrigger')
        .addTo(controller);
}

let mobile = document.body.clientWidth;


if (mobile <= 470) {
    let mobileAbout = document.getElementById('aboutUs');

    let complete = mobileAbout.classList.remove('scrollTrigger');
    
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


  var female = document.getElementById('female');
  var male = document.getElementById('male');
  var children = document.getElementById('children');
  var rightForm = document.getElementById('right-form');
  
  female.onclick = ()=> {
    rightForm.innerHTML = '<input type="text" placeholder=" Height *" required>\
    <input type="text" placeholder=" Waist *" required>\
    <input type="text" placeholder=" Bust *" required>\
    <input type="text" placeholder=" Hips *" required>\
    <input type="text" placeholder=" Dress Size *" required>\
    <input type="text" placeholder=" Shoe Size *" required>\
    <input type="text" placeholder=" Hair Color *" required>\
    <input type="text" placeholder=" Eye Color *" required>\
    <label for="imageUpload1" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 1 *</label>\
    <input type="file" id="imageUpload1" accept="image/*" style="display: none">\
    <label for="imageUpload2" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 2 *</label>\
    <input type="file" id="imageUpload2" accept="image/*" style="display: none">\
    <label for="imageUpload3" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 3 *</label>\
    <input type="file" id="imageUpload3" accept="image/*" style="display: none">'
  }

  male.onclick = ()=> {
    rightForm.innerHTML = '<input type="text" placeholder=" Height *" required>\
                        <input type="text" placeholder=" Waist *" required>\
                        <input type="text" placeholder=" Chest *" required>\
                        <input type="text" placeholder=" Collar *" required>\
                        <input type="text" placeholder=" Inseam *" required>\
                        <input type="text" placeholder=" Suit *" required>\
                        <input type="text" placeholder=" Sleeve *" required>\
                        <input type="text" placeholder=" Shoe Size *" required>\
                        <input type="text" placeholder=" Hair Color *" required>\
                        <input type="text" placeholder=" Eye Color *" required>\
                        <label for="imageUpload1" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 1 *</label>\
                        <input type="file" id="imageUpload1" accept="image/*" style="display: none">\
                        <label for="imageUpload2" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 2 *</label>\
                        <input type="file" id="imageUpload2" accept="image/*" style="display: none">\
                        <label for="imageUpload3" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 3 *</label>\
                        <input type="file" id="imageUpload3" accept="image/*" style="display: none"></input>'
  }

  children.onclick= ()=> {
    rightForm.innerHTML = '<input type="text" placeholder=" Height *" required>\
                          <input type="text" placeholder=" Waist *" required>\
                          <input type="text" placeholder=" Size *" required>\
                          <input type="text" placeholder=" Shoe Size *" required>\
                          <input type="text" placeholder=" Hair Color *" required>\
                          <input type="text" placeholder=" Eye Color *" required>\
                          <label for="imageUpload1" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 1 *</label>\
                          <input type="file" id="imageUpload1" accept="image/*" style="display: none">\
                          <label for="imageUpload2" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 2 *</label>\
                          <input type="file" id="imageUpload2" accept="image/*" style="display: none">\
                          <label for="imageUpload3" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 3 *</label>\
                          <input type="file" id="imageUpload3" accept="image/*" style="display: none">'
  }

  

  female.ontouchstart = ()=> {
    rightForm.innerHTML = '<input type="text" placeholder=" Height *" required>\
    <input type="text" placeholder=" Waist *" required>\
    <input type="text" placeholder=" Bust *" required>\
    <input type="text" placeholder=" Hips *" required>\
    <input type="text" placeholder=" Dress Size *" required>\
    <input type="text" placeholder=" Shoe Size *" required>\
    <input type="text" placeholder=" Hair Color *" required>\
    <input type="text" placeholder=" Eye Color *" required>\
    <label for="imageUpload1" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 1 *</label>\
    <input type="file" id="imageUpload1" accept="image/*" style="display: none">\
    <label for="imageUpload2" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 2 *</label>\
    <input type="file" id="imageUpload2" accept="image/*" style="display: none">\
    <label for="imageUpload3" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 3 *</label>\
    <input type="file" id="imageUpload3" accept="image/*" style="display: none">'
  }

  male.ontouchstart = ()=> {
    rightForm.innerHTML = '<input type="text" placeholder=" Height *" required>\
                        <input type="text" placeholder=" Waist *" required>\
                        <input type="text" placeholder=" Chest *" required>\
                        <input type="text" placeholder=" Collar *" required>\
                        <input type="text" placeholder=" Inseam *" required>\
                        <input type="text" placeholder=" Suit *" required>\
                        <input type="text" placeholder=" Sleeve *" required>\
                        <input type="text" placeholder=" Shoe Size *" required>\
                        <input type="text" placeholder=" Hair Color *" required>\
                        <input type="text" placeholder=" Eye Color *" required>\
                        <label for="imageUpload1" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 1 *</label>\
                        <input type="file" id="imageUpload1" accept="image/*" style="display: none">\
                        <label for="imageUpload2" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 2 *</label>\
                        <input type="file" id="imageUpload2" accept="image/*" style="display: none">\
                        <label for="imageUpload3" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 3 *</label>\
                        <input type="file" id="imageUpload3" accept="image/*" style="display: none"></input>'
  }

  children.ontouchstart= ()=> {
    rightForm.innerHTML = '<input type="text" placeholder=" Height *" required>\
                          <input type="text" placeholder=" Waist *" required>\
                          <input type="text" placeholder=" Size *" required>\
                          <input type="text" placeholder=" Shoe Size *" required>\
                          <input type="text" placeholder=" Hair Color *" required>\
                          <input type="text" placeholder=" Eye Color *" required>\
                          <label for="imageUpload1" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 1 *</label>\
                          <input type="file" id="imageUpload1" accept="image/*" style="display: none">\
                          <label for="imageUpload2" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 2 *</label>\
                          <input type="file" id="imageUpload2" accept="image/*" style="display: none">\
                          <label for="imageUpload3" class="btn btn-block selectable" style="text-align: left; padding-left:5px;">Image 3 *</label>\
                          <input type="file" id="imageUpload3" accept="image/*" style="display: none">'
  }