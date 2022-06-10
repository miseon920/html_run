$(function () {
  $("header i").click(function () {
    $(".cover").toggleClass("on");
  });
  var id_pos = $(".main_box").children("sticky");
  $(".cover")
    .find("li a")
    .click(function () {
      var idx = $(this).parent("li").index();
      // var len = $(".main_box").children().eq(idx).offsetTop;
      var w_h = $(window).height(); //100vh 이므로
      var real_h = idx * w_h;
      $(".cover").removeClass("on");
      $("html,body").animate({ scrollTop: real_h }, 600);
      return false;
    });
});
