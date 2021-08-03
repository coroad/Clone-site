$(function () {
  $(window).resize(function () {
    if ($(window).width() > 1024) {
      $("nav").removeClass("on");
      $("body").removeClass("dim");
      $(".total_menu img")
        .attr("src", "images/btn-menu.png")
        .attr("alt", "주메뉴보기");
    }
  });

  // Resize //
  if ($(window).width() > 1024) {
    $("nav > ul > li").mouseenter(function () {
      $("header").css({ height: "380px" });
      $("header").addClass("on");
      $(".langSelect > a").css({ color: "#000" });
      $(".depth").css({ display: "block" });
      $("h1 img").attr({ src: "images/logo_active.png" });
    }); //mouseenter

    $("nav > ul > li").mouseleave(function () {
      $("header").css({ height: "85px" });
      $("header").removeClass("on");
      $(".depth").css({ display: "none" });
      $("h1 img").attr({ src: "images/logo.png" });
      $(".langSelect > a").css({ color: "#fff" });
    }); //mouseleave
  } //if

  // Total menu //
  $(".total_menu").on("click", function () {
    $(".total_menu img").attr("src", function (index, attr) {
      if (attr.match("menu")) {
        return attr.replace("menu.png", "close.png");
      } else {
        return attr.replace("close.png", "menu.png");
      }
    });

    // Alt 값 바꾸기 //
    $(".total_menu img").attr("alt", function (index, attr) {
      if (attr.match("주메뉴보기")) {
        return attr.replace("주메뉴보기", "주메뉴닫기");
      } else {
        return attr.replace("주메뉴닫기", "주메뉴보기");
      }
    });

    // Toggle Nav //
    $("nav").toggleClass("on");
    $("body").toggleClass("dim");
  });
  $(".langSelect a").click(function () {
    $(".langSelect ul").slideToggle();
  });

  // Slick slide //

  $(".slideWrap").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 719,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  /* Family site */

  $(".family__site button").on("click focusin", function () {
    $(".family__site > ul").slideToggle();
  });
}); //ready
