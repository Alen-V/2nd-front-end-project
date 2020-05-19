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
