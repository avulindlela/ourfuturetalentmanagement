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


function collapseMenu() {
    let menu = document.getElementById('menu-bar');
    let menuInfo = document.getElementById('our-future-menu');
    let scrollOffset = window.pageYOffset;

    menu.classList.add('collapsed');
    menu.setAttribute('aria-expanded', 'false');
    menuInfo.classList.remove('show');
    menuInfo.classList.remove('collapsing');
}




/*******************Search Bar*********** */
// const searchBar = document.getElementById('searchBar');
// var Artists = document.getElementsByClassName('men-links').namedItem();
// searchBar.addEventListener('keyup', (e) =>{
//    const searches = e.target.value.toLowerCase();
//    console.log(Artists);



// })


  var female = document.getElementById('female');
  var male = document.getElementById('male');
  var children = document.getElementById('children');
  var rightForm = document.getElementById('right-form');
  var width = window.innerWidth;

  function maleTouch() {
    let rightForm = document.getElementById('right-form');
    rightForm.innerHTML = '<input type="text" placeholder=" Height *" required>\
                        <input type="text" placeholder=" Waist *" required>\
                        <input type="text" placeholder=" Chest *" required>\
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

  function femaleTouch() {
    let rightForm = document.getElementById('right-form');
    rightForm.innerHTML = '<input type="text" placeholder=" Height *" required>\
    <input type="text" placeholder=" Waist *" required>\
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

  function childrenTouch() {
    let rightForm = document.getElementById('right-form');
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

 if (width<=800) {
  
  
 }

 else {
  female.onclick = ()=> {
    rightForm.innerHTML = '<input type="text" placeholder=" Height *" required>\
    <input type="text" placeholder=" Waist *" required>\
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
 }

  

var agreement = document.getElementById('agreement');
var submitButton = document.getElementById('submit');

function policyAgreement() {
    let submitButton = document.getElementById('submit');
    submitButton.removeAttribute('disabled');
}