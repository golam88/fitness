

/*aos smoothscroll j*/ 
AOS.init({
    offset:400,
    duration:1000,
});


/*navbar smoothscroll*/ 
var scroll = new SmoothScroll('.menu a[href*="#"]',{
    speed:600,
});


$(document).ready(function(){
    $(".st-nav").sticky({topSpacing:0});
  });

















