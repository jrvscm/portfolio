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

function showNav() {
$(document).scroll(function() {
  let y = $(this).scrollTop();
  let height =  Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  if (y > height) {
    $('nav').slideDown('fast').removeClass('hidden');
  } else {
    $('nav').slideUp('fast').addClass('hidden');
  }
    skillBars();
  });
}


function skillBars() {
  $('.skillbar').each(function(){
    $(this).find('.skillbar-bar').animate({
      width:$(this).attr('data-percent')
    },6000);
  });
}

function smoothScrollToLinks() {
  $(document).on("scroll", onScroll);
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();


      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');

      let target = this.hash;
      let $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top + 10
      }, 900, 'swing');
      
      $(document).on("scroll", onScroll);
  });
}

function onScroll(event){
  let scrollPos = $(document).scrollTop();
    $('#nav-links > .nav-link > a').each(function () {
      let currLink = $(this);
      let refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#nav-links > .nav-link > a').removeClass("active");
          currLink.addClass("active");
        }
        else {
          currLink.removeClass("active");
        }
  });
}

function handleFormSubmit() {
  $('form').on('click', 'button', event => {
    event.preventDefault();
    if($('form').valid()){
    let service_id = 'gmail';
    let template_id = 'portfolio';
    let template_params = {
      name: `${$('#firstname').val()} ${$('#lastname').val()}`,
      email: `${$('#email').val()}`,
      message: `${$('#message').val()}`
    };
    emailjs.send(service_id, template_id, template_params);
    formSuccess();
    }
  });
}

function formSuccess() {
  $('form').fadeOut('fast');

setTimeout(function() {
  $('#firstname').val('');
  $('#lastname').val('');
  $('#email').val('');
  $('#message').val('');
}, 200);

  setTimeout(function() {
    $('#success-heading').fadeIn('fast');
  }, 300);

  setTimeout(function() {
    $('#success-heading').fadeOut('fast');
  }, 2000);

  setTimeout(function() {
    $('form').fadeIn('fast');
  }, 2200);
}

function watchFormSubmit() {
  $("form[name='contact']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      message: "required"
    },

    messages: {
      firstname: "Please enter your first name",
      lastname: "Please enter your last name",
      email: "Please enter a valid email",
      message: "Please enter a message"
    },
  });
}

function initializeEmailjs() {
    emailjs.init("user_GT2OKAvgxo6lGXxrtK6oJ");
  }


function onLoad() {
  initializeEmailjs();
  watchFormSubmit();
  handleFormSubmit();
  smoothScrollToLinks();
  rotateArrow();
  showNav();
}

$(onLoad);