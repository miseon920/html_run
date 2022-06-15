$(function () {
  var createNum = 0;
  $(".main_slider").on(
    "init afterChange",
    function (event, slick, currentSlide) {
      $(".main_slider .slick-current")
        .addClass("on")
        .siblings()
        .removeClass("on");
      $(".num").css({ "background-position-y": -100 * currentSlide + "px" });
      $(".custom_dots li")
        .eq(currentSlide ? currentSlide : 0)
        .addClass("on")
        .siblings()
        .removeClass("on");
      createNum++;
    }
  );

  //init 는 초기화의미
  $(".main_slider").slick({
    arrows: false,
    //autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    //autoplaySpeed: 4000,
    infinite: true,
  });
  $(".custom_dots li a").on("click", function () {
    var idx = $(this).parent().index();
    if ($(this).parent().hasClass("on") == true) {
    } else {
      $(".num").css({ backgroundPositionY: -100 * idx + "px" });
    }
    $(".main_slider").slick("slickGoTo", idx);
    createNum = idx;
    return false;
  });
  $(".custom_arrow i:nth-child(1)").on("click", function () {
    $(".main_slider").slick("slickPrev");
  });
  $(".custom_arrow i:nth-child(2)").on("click", function () {
    $(".main_slider").slick("slickNext");
  });

  $(".custom_play i:nth-child(1)").on("click", function () {
    $(".main_slider").slick("slickPause");
  });
  $(".custom_play i:nth-child(2)").on("click", function () {
    $(".main_slider").slick("slickPlay");
  });
});
