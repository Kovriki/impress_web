$(document).ready(function(){
  $(document).mousemove(function(e) {
  $('.cursor').css({
  left:e.pageX - 10,
  top:e.pageY - 10
    });
  });


  $("a, input, .box, .cover .image_box, .drag, .date_box, .buy_ticket").mouseover(function(){
$(".cursor").addClass("active");
});
$("a, input, .box, .cover .image_box, .drag, .date_box, .buy_ticket").mouseout(function(){
$(".cursor").removeClass("active");
});

$("input").mouseover(function(){
$(".cursor").addClass("inter");
});
$("input").mouseout(function(){
$(".cursor").removeClass("inter");
});



})
