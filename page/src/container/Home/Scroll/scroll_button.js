
import $ from 'jquery';

$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });


//   LOADING HR SECTION
var titulo = parseInt($(".wrapper").css("margin-right")) + parseInt($('.titulo-mod1 h2').width()) + 30;

$('.titulo-mod1 hr').css({marginLeft: titulo, width: parseInt($("body").width()) - titulo});
