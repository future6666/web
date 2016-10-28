$(document).ready(function () {
  $(".c_order_add").popover({
    trigger: "hover",
    placement: "left",
    html: true,
    content: '<p>美美哒<br/>广东东莞市松山湖国际金融创新园总部三路中汇世银大厦<br/>158 * * * * 0800</p>'
  });
  $(".user-goods").popover({
    trigger: "hover",
    placement: "right",
    html: true,
    content: '<img src="images/no_goods.png"/>'
  });
})