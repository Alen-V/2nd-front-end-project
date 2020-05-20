$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        items:3,
        loop:true,
        responsiveClass:true,
        nav:true,
        autoWidth: true
    })
    $(`.owl-next`).html(`<i class="fas fa-angle-right"></i>`)
    $(`.owl-prev`).html(`<i class="fas fa-angle-left"></i>`)
    
  });

let burgerButton = document.getElementsByClassName(`burger-button`);
let navbar = document.getElementsByClassName(`navbar`);
let buttonContainer = document.getElementsByClassName(`button-container`);
let sections = document.querySelectorAll(`section`)
let footer = document.querySelectorAll(`footer`)
let list = document.getElementsByClassName(`nav-list`)[0];

function classToggle(elements, classElement) {
    for (let element of elements) {
        element.classList.toggle(`${classElement}`)
    }
}

burgerButton[0].addEventListener(`click`, function() {
    classToggle(burgerButton, `hidden`);
    classToggle(navbar, `hidden-nav`);
    classToggle(buttonContainer, `active`)
    // classToggle(sections, `display-none`)
    // classToggle(footer, `display-none`)
})

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener(`click`, function(){
        classToggle(burgerButton, `hidden`);
        classToggle(navbar, `hidden-nav`);
        classToggle(buttonContainer, `active`)
    })    
}