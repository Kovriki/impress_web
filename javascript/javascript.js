$(document).ready(function(){
  // движение курсора
  $(document).mousemove(function(e) {
  $('.cursor').css({
  left:e.pageX - 10,
  top:e.pageY - 10
    });
  });

// курсор
  $("a, input, .box, .cover .image_box, .drag, .date_box, .buy_ticket, .arrow_btn, .unity, .video_cont").mouseover(function(){
$(".cursor").addClass("active");
});
$("a, input, .box, .cover .image_box, .drag, .date_box, .buy_ticket, .arrow_btn, .unity, .video_cont").mouseout(function(){
$(".cursor").removeClass("active");
});

$("input").mouseover(function(){
$(".cursor").addClass("inter");
});
$("input").mouseout(function(){
$(".cursor").removeClass("inter");
});

// index
$(".prisoedin").click(function(){
  $(".cp_2, .c_2").removeClass("fade");
  $(".cp_1, .c_1").addClass("fade");
  setTimeout(function(){
    $(".member_popup, .black").addClass("hidden")
    setTimeout(function(){
      $(".member_popup, .black").addClass("fade")
    },1000);
  },1500);
})



$(" .black, .exit").click(function(){
    $(".member_popup, .black").addClass("hidden")
    setTimeout(function(){
      $(".member_popup, .black").addClass("fade")
    },500);
});
///////
$(".unity").click(function(){
        let url = "dialog.html";
        location.href = "dialog.html";
      })
// $(".event").click(function(){
//         let url = "subdiv.html";
//         location.href = "subdiv.html";
//       })

/////////
$(window).resize(function(){
let width = $(window).width();
if(width <= 768){
  $('nav, .member_popup').addClass('fade');
  $('nav, .member_popup').addClass('hidden');
  // $('nav').addClass('hidden');
}
})

  .resize();

  $(".icon-close").click(function(){
    // $(".menu-items").addClass("fade")
    $(this).parent().addClass("hidden")
    setTimeout(function(){
      $("nav, .menu-non-active").toggleClass("fade");
    },600);
    setTimeout(function(){
      if($("nav").hasClass("fade")){
        $(".menu-non-active").removeClass("hidden");
      } else {
        $("nav").removeClass("hidden");
      }
      // $("menu-non-active").removeClass("fade");
    },800);
  })




})
