$(function () {

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/main/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/main/arrow-right.svg" alt="">',
    asNavFor: '.slider-dotshead'
  });

  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
    infinite: false,
  });

  if ($(window).width() >= '1210') {
    $('.serf-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/main/arrow-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/main/arrow-right.svg" alt="">',
      asNavFor: '.slider-map',
    })
  }
  if ($(window).width() >= '900' && $(window).width() < '1210') {
    $('.serf-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/main/arrow-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/main/arrow-right.svg" alt="">',
      asNavFor: '.slider-map',
    })
  }
  if ($(window).width() >= '650' && $(window).width() < '900') {
    $('.serf-slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/main/arrow-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/main/arrow-right.svg" alt="">',
      asNavFor: '.slider-map',
    })
  }
  if ($(window).width() < '650') {
    $('.serf-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/main/arrow-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/main/arrow-right.svg" alt="">',
      asNavFor: '.slider-map',
    })
  }

  $('.slider-map').slick({
    slidesToScroll: 8,
    slidesToShow: 8,
    arrows: false,
    asNavFor: '.serf-slider',
    focusOnSelect: true,
    infinite: false,
  })

  $('.travel__slider, .shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/main/arrow-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/main/arrow-right.svg" alt="">',
  })

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/sleep/Plus.svg"></div><div class="quantity-button quantity-down"><img src="img/sleep/minus.svg"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');
    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.quantity-button').on('click', function () {
		var parents = $(this).parents('.travel-slider__info');
		let summ = $('.nights', parents).val() * $('.summ', parents).data('guests') * $('.guests', parents).val();
		$('.summ', parents).html('$' + summ);
	});
  

  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests')
  $('.summ').html('$' + summ)

  $('.surfboard-box__circle').on('click', function () {
    $(this).toggleClass('active')
  })

  $('.menu-btn').on('click', function () {
    $('.menu').toggleClass('active')
  })

  if ($(window).width() >= '320') {
    $('.serf-box').toggleClass('wow animate__animated animate__fadeInUpBig')
  }

  new WOW().init();

})
