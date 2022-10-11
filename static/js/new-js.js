
// change the nav bar color
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    // $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $nav.toggleClass('scrolled', $(this).scrollTop() > 500);

    var $nav = $(".navbar-brand");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 500);

    var $nav = $(".nav-link");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 500);
  });

});

// initiate full page scroll
$(document).ready(function() {
$('#fullpage').fullpage({
  scrollBar: true,
  responsiveWidth: 400,
  navigation: true,
  navigationTooltips: ['cover', 'product', 'contact'],
  anchors: ['cover', 'product', 'contact'],
  // menu: '#myMenu',
  fitToSection: false,

  afterLoad: function ( anchorLink, index){
    var loadedSection = $(this);


    //using index
    if(index==1){
      /* add opacity to arrow */
      $('.fa-chevron-down').each(function(){
        $(this).css('opacity','1')
      });
      $('.header-links a').each(function(){
        $(this).css('color','white')
      });
      $('.header-links').css("background-color","transparent");
    }

    else if(index!=1){
      $('.header-links a').each(function(){
        $(this).css('color','black')
      });
      $('.header-links').css('background-color', 'white');
    }

    //using index
    if(index == 2){

      /* animate skill bars */
      $('.skillbar').each(function(){
        $(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },2500);
      });
    }
  }
});

  // move section down one
  $(document).on('click', '#moveDown', function(){
    $.fn.fullpage.moveSectionDown();
  });

  // // fullpage.js link navigation
  // $(document).on('click', '#product', function(){
  //   $.fn.fullpage.moveTo(2);
  // });
  //
  // $(document).on('click', '#projects', function(){
  //   $.fn.fullpage.moveTo(3);
  // });
  //
  // $(document).on('click', '#contact', function(){
  //   $.fn.fullpage.moveTo(4);
  // });
});
