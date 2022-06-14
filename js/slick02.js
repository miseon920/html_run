$(function () {
  $(".main_slider").on(
    "init afterChange",
    function (event, slick, currentSlide) {
      $(".slider01 .box .num").text(
        (currentSlide ? currentSlide + 1 : 1) + "/" + slick.slideCount
      );
      //console.log(slick);
      $(".slider01 .content li")
        .eq(currentSlide)
        .addClass("on")
        .siblings()
        .removeClass("on");
    }
  );
  $(".main_slider").slick({
    centerMode: true,
    centerPadding: "250px",
    dots: true,
    arrows: false,
  });
  $(".slide_arrow i:first-child").on("click", function () {
    $(this).closest("section").find(".slick-slider").slick("slickPrev");
  });
  $(".slide_arrow i:last-child").on("click", function () {
    $(this).closest("section").find(".slick-slider").slick("slickNext");
  });
  //left_slider
  $(".left_slider").slick({
    arrows: false,
    fade: true,
    asNavFor: ".right_slider",
  });
  $(".right_slider").slick({
    arrows: false,
    slidesToShow: 4,
    variableWidth: true,
    centerMode: false,
    asNavFor: ".left_slider",
  });
});
