let _functions = {},
  winW, winH, winScr, isTouchScreen, isAndroid, isIPhone, is_Mac, is_IE, is_Chrome;

jQuery(function ($) {

  "use strict";

  /* function on page ready */
  isTouchScreen = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i),
    isAndroid = navigator.userAgent.match(/Android/i),
    isIPhone = navigator.userAgent.match(/iPhone/i),
    is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0,
    is_IE = /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent) || /Edge\/\d+/.test(navigator.userAgent),
    is_Chrome = navigator.userAgent.indexOf('Chrome') >= 0 && navigator.userAgent.indexOf('Edge') < 0;

  const $body = $('body');

  setTimeout(function () {
    $body.addClass('loaded');
  }, 1000);


  if (isTouchScreen) {
    $('html').addClass('touch-screen');
  }
  if (isAndroid) {
    $('html').addClass('android');
  }
  if (isIPhone) {
    $('html').addClass('ios');
  }
  if (is_Mac) {
    $('html').addClass('mac');
  }
  if (is_IE) {
    $('html').addClass('ie');
  }
  if (is_Chrome) {
    $('html').addClass('chrome');
  }


  _functions.pageCalculations = function () {
    winW = $(window).width();
    winH = $(window).height();
  }

  _functions.pageCalculations();



  //rellax
  setTimeout(function () {
    if (!is_IE && $('.rellax').length && $(window).width() > 1199) {
      var rellax = new Rellax('.rellax', {
        center: true
      });
    }
  }, 100);

  //images preload
  _functions.imagesLazyLoad = function () {
    /* images load */
    $('img[data-i-src]:not(.imgLoaded)').each(function (i, el) {
      let loadImage = new Image();
      loadImage.src = $(el).data('i-src');

      loadImage.onload = function () {
        $(el).attr({
          'src': $(el).data('i-src')
        }).addClass('imgLoaded');
      };
      loadImage = null;
    });

    $('iframe[data-i-src]:not(.imgLoaded)').each(function (i, el) {
      $(el).attr({
        'src': $(el).data('i-src')
      }).addClass('imgLoaded');
    });

    $('[data-bg]:not(.bgLoaded)').each(function (i, el) {
      let loadImage = new Image();
      loadImage.src = $(el).data('bg');

      loadImage.onload = function () {
        $(el)
          .css({
            'background-image': 'url(' + $(el).data('bg') + ')'
          })
          .addClass('bgLoaded');
      }
      loadImage = null;
    });
  }

  //images preload
  setTimeout(function () {
    _functions.imagesLazyLoad();
  }, 100);

  _functions.pageScroll = function (current, header_height) {
    $('html, body').animate({
      scrollTop: current.offset().top - header_height
    }, 700);
  }




  /* function on page scroll */
  $(window).scroll(function () {
    _functions.scrollCall();

  });

  var prev_scroll = 0;
  _functions.scrollCall = function () {
    //show-hide header on scroll
    if (winScr > prev_scroll) {
      $('header').addClass('hide-header');
    } else {
      $('header').removeClass('hide-header');
    }
    prev_scroll = winScr;

    if (winScr <= 10) {
      $('header').removeClass('hide-header');
      prev_scroll = 0;
    }
  }
  _functions.scrollCall();

  setTimeout(_functions.scrollCall, 0);


  /* function on page resize */
  _functions.resizeCall = function () {
    setTimeout(function () {
      _functions.pageCalculations();
    }, 100);
  };

  if (!isTouchScreen) {
    $(window).resize(function () {
      _functions.resizeCall();
    });
  } else {
    window.addEventListener("orientationchange", function () {
      _functions.resizeCall();
    }, false);
  }

  /* swiper sliders */
  _functions.getSwOptions = function (swiper) {
    let options = swiper.data('options');
    options = (!options || typeof options !== 'object') ? {} : options;
    const $p = swiper.closest('.swiper-entry');
    if (!options.pagination) options.pagination = {
      el: $p.find('.swiper-pagination')[0],
      clickable: true
    };
    if (!options.navigation) options.navigation = {
      nextEl: $p.find('.swiper-button-next')[0],
      prevEl: $p.find('.swiper-button-prev')[0]
    };
    options.preloadImages = false;
    options.lazy = {
      loadPrevNext: true
    };
    options.observer = true;
    options.observeParents = true;
    options.watchOverflow = true;
    options.centerInsufficientSlides = true;
    if (!options.speed) options.speed = 500;
    options.roundLengths = true;
    if (isTouchScreen) options.direction = "horizontal";
    return options;
  };
  _functions.initSwiper = function (el) {
    const swiper = new Swiper(el[0], _functions.getSwOptions(el));
  };

  $('.swiper-entry .swiper-container').each(function () {
    _functions.initSwiper($(this));
  });



  $('.swiper-thumbs').each(function () {
    let top = $(this).find('.swiper-container.swiper-thumbs-top')[0].swiper,
      bottom = $(this).find('.swiper-container.swiper-thumbs-bottom')[0].swiper;
    top.thumbs.swiper = bottom;
    top.thumbs.init();
    top.thumbs.update();
  });
  $('.swiper-control').each(function () {
    let top = $(this).find('.swiper-container')[0].swiper,
      bottom = $(this).find('.swiper-container')[1].swiper;
    top.controller.control = bottom;
    bottom.controller.control = top;
  });


  //popup
  let popupTop = 0;
  _functions.removeScroll = function () {
    popupTop = $(window).scrollTop();
    $('html').css({
      // "position": "fixed",
      "top": -$(window).scrollTop(),
      "width": "100%"
    }).addClass("overflow-hidden");
  }
  _functions.addScroll = function () {
    $('html').css({
      // "position": "static"
    }).removeClass("overflow-hidden");
    window.scroll(0, popupTop);
  }

  _functions.openPopup = function (popup) {
    $('.popup-content').removeClass('active');
    $(popup + ', .popup-wrapper').addClass('active');
    _functions.removeScroll();
  };

  _functions.closePopup = function () {
    $('.popup-wrapper, .popup-content').removeClass('active');

    // $('.popup-iframe').html('');
    $('.video-popup iframe').remove();

    _functions.addScroll();
  };

  _functions.textPopup = function (title, description) {
    $('#text-popup .text-popup-title').html(title);
    $('#text-popup .text-popup-description').html(description);
    _functions.openPopup('#text-popup');
  };

  $(document).on('click', '.open-popup', function (e) {
    e.preventDefault();
    _functions.openPopup('.popup-content[data-rel="' + $(this).data('rel') + '"]');
  });

  $(document).on('click', '.popup-wrapper .close-popup, .popup-content .layer-close', function (e) {
    e.preventDefault();
    _functions.closePopup();
  });

  // detect if user is using keyboard tab-button to navigate
  // with 'keyboard-focus' class we add default css outlines
  function keyboardFocus(e) {
    if (e.keyCode !== 9) {
      return;
    }

    switch (e.target.nodeName.toLowerCase()) {
      case 'input':
      case 'select':
      case 'textarea':
        break;
      default:
        document.documentElement.classList.add('keyboard-focus');
        document.removeEventListener('keydown', keyboardFocus, false);
    }
  }

  document.addEventListener('keydown', keyboardFocus, false);


  /*video pop-up*/
  $(document).on('click', '.video-open', function (e) {
    e.preventDefault();
    var video = $(this).attr('href');
    $('.video-popup-container iframe').attr('src', video );
    $('.video-popup').addClass('active');
    $('html').addClass('overflow-hidden');
  });
  $('.video-popup-close, .video-popup-layer').on('click', function (e) {
    $('html').removeClass('overflow-hidden');
    $('.video-popup').removeClass('active');
    $('.video-popup-container iframe').attr('src', 'about:blank');
    e.preventDefault();
  });





  //scroll animation
  function scrollAnime() {
    if ($('.animate-item').length && !is_IE) {
      $('.animate-item').not('.animated').each(function () {
        var th = $(this);
        if ($(window).width() < 768) {
          if ($(window).scrollTop() >= th.offset().top - ($(window).height() * 0.95)) {
            th.addClass('animated');
          }
        } else {
          if ($(window).scrollTop() >= th.offset().top - ($(window).height() * 0.95)) {
            th.addClass('animated');
          }
        }

      });
    }
  }
  scrollAnime();

  $(window).on('scroll', function () {
    scrollAnime();
  });



  // Input focus
  $('input, textarea').focus(function () {
    $(this).parent().addClass('active');
  });
  // Input blur
  $('input, textarea').blur(function () {
    $(this).parent().removeClass('active');
  });
  // Invalid Input
  $('.input[required]').on('blur', function () {
    if ($(this).val().trim()) {
      $(this).parent().removeClass('invalid');
    } else {
      $(this).parent().addClass('invalid');
    }
  });



  //informer
  setTimeout(function () {
    $('.cookies-informer').addClass('active');
  }, 6000);

  $(document).on('click', '.close-cookies', function () {
    $(this).parents('.cookies-informer').removeClass('active');
  });



  // tabs
  $('.tab-title').on('click', function () {
    $(this).parent().toggleClass('active');
  });
  $('.tab-toggle div').on('click', function () {
    var tab = $(this).closest('.tabs').find('.tab');
    var i = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    tab.eq(i).siblings('.tab:visible').fadeOut(function () {
      tab.eq(i).fadeIn();
    });
    $(this).closest('.tab-nav').removeClass('active').find('.tab-title').text($(this).text());
  });



  // accordion
  $(document).on('click', '.accordion:not(.employment-accord) .accordion-item .accordion-title', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').next().slideUp();
    } else {
      $(this).closest('.accordion').find('.accordion-title').not(this).removeClass('active').next().slideUp();
      $(this).addClass('active').next().slideDown();
    }
  });



  //visible more text seo block
  $('.more-text .read-more').on('click', function () {
    $(this).parents('.more-text').toggleClass('open-more-text');
    $(this).parent().find('.text').slideToggle(600);

    if ($('.more-text').hasClass('open-more-text')) {
      $('.read-more b').text($(this).data('active-text'));
    } else {
      $('.read-more b').text($(this).data('orig-text'));
    }
  });


  // filters click
  $('.filters-list li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');

    if ($(window).width() < 768) {
      $(this).parents('.filter-list-wrapper').removeClass('active');
      $(this).parents('.filter-list-wrapper').find('.filters-title').text($(this).text());
    }
  });

  // filters mobile;
  $('.filters-title').on('click', function () {
    $(this).parents('.filter-list-wrapper').toggleClass('active')
  });


  /*menu*/
  $(document).on('click', '.hamburger', function () {
    $('html').toggleClass('overflow-menu');
    $(this).parents('header').toggleClass('open-menu');
  });

  //Close menu on layer close
  $(document).on('click', '.header-layer-close, .side-menu .btn-close', function () {
    $('header').removeClass('open-menu')
    $('html').removeClass('overflow-menu');
  });

  // second-menu 
  $(document).on('click', '.header-menu-btn', function () {
    if ($(window).width() < 1200) {
      $(this).toggleClass('active');
      $(this).parents('.header-menu').find('.header-links').slideToggle();
    }
  });



  /* sticky item */
  _functions.stickyInit = function () {
    let top = $('header').height() + 40


    if ($(window).width() >= 992 && $('.sticky-parent').length) {
      $(".sticky-item").stick_in_parent({
        parent: '.sticky-parent',
        inner_scrolling: false,
        offset_top: top
      });
    } else {
      $(".sticky-item").trigger("sticky_kit:detach");
    }
  };
  _functions.stickyInit();
  /* end sticky item */


  // change image after hover item 
  if ($('.services-wrapper').length && $(window).width() > 1199) {
    $('.services-list .custom-title').mouseover(function () {
      $(this).parent().addClass('active');
      var change_img = $(this).data('item');
      $('.services-list-img .img-item').each(function () {
        if ($(this).data('number-bg') == change_img) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    });

    $('.services-list .custom-title').mouseleave(function () {
      $('.services-list-img').find('.img-item').removeClass('active');
      $(this).parent().removeClass('active');
    });
  }


  // words animation
  Splitting();


  // Add Page decor
  if ($(window).width() > 1199) {

    let pageDecor = $(".page-decor");
    let pageH = $("#content-block").height();
    let sectionH;

    if ($(window).width() > 1599) {
      sectionH = 2500;
    } else if ($(window).width() > 1199 & $(window).width() < 1600) {
      sectionH = 2000;
    }

    for (let i = 0; i < pageH; i = (i + sectionH)) {
      pageDecor.append(' <div><b class="rellax" data-rellax-speed="-5"><i></i></b><b class="rellax" data-rellax-speed="6.5"><i></i></b></div>')
    }
  }


  // video hover
  $(".video-hover").hover(hoverVideo, hideVideo);

  function hoverVideo(e) {
    $(this).get(0).play();
  }

  function hideVideo(e) {
    $(this).get(0).pause();
  }


  // banner sub-title fade
  function calcTitleFadeHeight() {
    let itemHeight = +$('.sub-title-animate .active:visible').height();

    $('.sub-title-animate').each(function() {
      $(this).css('height', itemHeight);
    });
  }
  calcTitleFadeHeight();

  function bannerTitlesFade() {
    $('.sub-title-animate span').each(function() {
      let th = $(this),
          activeItem = th.parent().find('span.active'),
          itemIndexNext = +activeItem.index() + 1;

      if (activeItem.is(':last-child')) {
        th.eq(0).addClass('active').siblings().removeClass('active');
      } else {
        th.removeClass('active');
        th.eq(itemIndexNext).addClass('active');
      }

      calcTitleFadeHeight();
    });
  }

  if ($('.sub-title-animate').length) {
    setTimeout(function() {

      setInterval(function() {
        bannerTitlesFade();
      }, 2500);

    }, 500);
  }


});