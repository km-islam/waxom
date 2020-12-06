$(function(){
// banner slider
$('.banner-text-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  speed:1500,
});
// service-slider
$('.service-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  speed:1500,
  responsive: [
      {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }  
  ]    
});

//filter
var containerEl = document.querySelector('.project-main');
var mixer = mixitup(containerEl);    
    
//video    
 $('.venobox').venobox(); 
    
// counter    
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
    
// blog-slider
$('.blog-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  centerMode:true,
  centerPadding:false,
  speed:1500,
  autoplaySpeed: 2500,
  arrows:false,
  responsive: [
      {
      breakpoint: 992,
      settings: {
        centerMode:false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        centerMode:false,
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }  
  ]      
});
    
$(window).scroll(function(){
var scrolling = $(this).scrollTop();
if(scrolling > 200){
    $('.navbar').addClass('bg');
}
else {
     $('.navbar').removeClass('bg');
}
});    
    
    
});