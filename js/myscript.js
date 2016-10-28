$(document).ready(function () {
  $("#fist_menu").mouseover(function () {
    $(".menu").fadeIn(0)
  });
  $("#page_contact").mouseover(function () {
    $(".menu").fadeOut(0)
    $(".menu li").removeClass("on");
  });
  $("#list_top").mouseover(function () {
    $(".menu").fadeOut(0)
    $(".menu li").removeClass("on");
  });
  $(".menu>li").mouseover(function () {
    $(this).find($(".submenu")).fadeIn(0)
  });
  $(".menu").mouseout(function () {
    var i = $(this).index();
    $(this).find($(".submenu")).fadeOut(0)
  });
  $("#list_menu .menu li").mouseover(function () {
    $(this).addClass("on").siblings().removeClass("on");
  });
  $(".return_top").click(function () {
    $("html,body").animate({
      "scrollTop": 0
    }, 1000)
  });
  $("#1_floor").click(function () {
    $("html,body").animate({
      "scrollTop": $("#floor_one").offset().top
    }, 1000)
  });
  $("#2_floor").click(function () {
    $("html,body").animate({
      "scrollTop": $("#floor_two").offset().top
    }, 1000)
  });
  $("#3_floor").click(function () {
    $("html,body").animate({
      "scrollTop": $("#floor_three").offset().top
    }, 1000)
  });
  $("#4_floor").click(function () {
    $("html,body").animate({
      "scrollTop": $("#floor_four").offset().top
    }, 1000)
  });
  $("#5_floor").click(function () {
    $("html,body").animate({
      "scrollTop": $("#floor_five").offset().top
    }, 1000)
  });
  $("#6_floor").click(function () {
    $("html,body").animate({
      "scrollTop": $("#floor_six").offset().top
    }, 1000)
  })
  $("#search").click(function () {
    $(".nav_top").fadeOut(0);
    $(".search").fadeIn(200);
  })
  $("#close_search").click(function () {
    $(".nav_top").fadeIn(200);
    $(".search").fadeOut(0);
  })
})