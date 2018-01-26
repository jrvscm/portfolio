function rotateArrow() {
  $('#view-projects-button').mouseover(function() {
    $('.fa-arrow-right').removeClass('animation-rotate-left-90');
    $('.fa-arrow-right').addClass('animation-rotate-right-90');
  });

  $('#view-projects-button').mouseout(function() {
    $('.fa-arrow-right').removeClass('animation-rotate-right-90');
    $('.fa-arrow-right').addClass('animation-rotate-left-90');
  });
}

$(document).scroll(function() {
  let y = $(this).scrollTop();
  let height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  if (y > height) {
    $('nav').slideDown('fast').removeClass('hidden');
  } else {
    $('nav').slideUp('fast').addClass('hidden');
  }
});

$('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    },6000);
  });

function onLoad() {
  rotateArrow();
}

$(onLoad);