'use strict';

$(document).scroll(() => {
  if( $(this).scrollTop() > 1000) {
    $('.navbar').removeClass('hidden');
    $('.navbar').addClass('js-navbar-onScroll');
  } else {
    $('.navbar').addClass('hidden');
    $('.navbar').removeClass('js-navbar-onScroll');
  }
});

