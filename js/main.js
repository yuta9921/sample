'use trict';
jQuery(document).ready(function () {
  // click で検索窓を出す
  $('.header-search').css('display', 'none');
  $('#search').click(function () {
    $('.header-search').slideToggle();
  });
  //ホバーでヘッダーの要素を表示
  $('#information-hover , #introduction-hover ,#news-hover , #adoption-hover , #service-hover , #investor-hover , #future-hover').css('display', 'none');
  //#informationのホバーアクション
  $('#information , #information-hover').hover(
    function () {
      $('#information-hover').slideDown(900);
    },
    function () {
      $('#information-hover').slideUp();
    }
  );
  //#introductionのホバーアクション
  $('#introduction').hover(
    function () {
      $('#introduction-hover').slideDown(900);
    },
    function () {
      $('#introduction-hover').slideUp();
    }
  );
  //#newsのホバーアクション
  $('#news').hover(
    function () {
      $('#news-hover').slideDown(900);
    },
    function () {
      $('#news-hover').slideUp();
    }
  );
  //#adoptionのホバーアクション
  $('#adoption').hover(
    function () {
      $('#adoption-hover').slideDown(900);
    },
    function () {
      $('#adoption-hover').slideUp();
    }
  );
  //#serviceのホバーアクション
  $('#service').hover(
    function () {
      $('#service-hover').slideDown(900);
    },
    function () {
      $('#service-hover').slideUp();
    }
  );
  //#investorのホバーアクション
  $('#investor').hover(
    function () {
      $('#investor-hover').slideDown(900);
    },
    function () {
      $('#investor-hover').slideUp();
    }
  );
  //#futureのホバーアクション
  $('#future').hover(
    function () {
      $('#future-hover').slideDown(900);
    },
    function () {
      $('#future-hover').slideUp();
    }
  );
  //topへ戻るボタンーーーーーーーーーーー
  $('.to-top-btn').css('display', 'none');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('.to-top-btn').fadeIn();
    } else {
      $('.to-top-btn').fadeOut();
    }
  });
  $('.to-top-btn').click(function () {
    $('body , html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  // scrollでヘッダーを消す

  const topics = $('.topics').offset();
  $(window).on('load resize', function () {
    var winW = $(window).width();
    var devW = 767;
    if (winW >= devW) {
      $(window).scroll(function () {
        if ($(this).scrollTop() > topics.top - 150) {
          $('.header-scond').slideUp('slow');
        } else {
          $('.header-scond').slideDown('slow');
        }
      });
    }
  });
});

