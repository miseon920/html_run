$(function () {
  $(".visual_slider").on(
    "init reInit afterChange",
    function (event, slick, currentSlide) {
      //console.log(currentSlide);
      let cur = $(".slick-current");
      cur.find("a").removeClass("check");
      //console.log(cur);
      cur.addClass("on").siblings().removeClass("on");
      if ($(".item02 ").hasClass("on") == true) {
        $(".main").addClass("on");
      } else {
        $(".main").removeClass("on");
      }
    }
  );
  $(".visual_slider").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  });
  $(".slider").slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    dots: true,
    pauseOnHover: false,
  });
  $(".slider02").slick({
    slidesToShow: 3,
  });
  $(".wheel").click(function () {
    $("html,body").css({ transition: "0.5s" });
    return false;
  });
});
