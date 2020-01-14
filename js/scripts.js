$('.hero_slider').slick({
  dots: true,
  speed: 500,
  cssEase: 'linear'
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     if (scroll >= 500) {
        $(".chat-box").addClass("active");
    } else {
        $(".chat-box").removeClass("active");
    }
}); //missing );