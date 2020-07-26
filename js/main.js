
// https://codepen.io/KID_421/pen/bGEJqoR
$("#navbar").hide(0);
$(window).scroll(() => {
    if ($(window).scrollTop() > 700) {
      $("#navbar").fadeIn(500);
    }
  });

  $(window).scroll(() => {
    if ($(window).scrollTop() < 700) {
      $("#navbar").fadeOut(500);
    }
  });








// 最先 link2 摺起來, .動畫 設定 字體透明 0 

$("#link2").slideUp(0).animate({
    "opacity": 0
});

// 滑至 link , link2摺下來, .動畫 設定 字體透明 1 (顯示)
$("#link").mouseenter(() => {
    
    $("#link2").delay(500).slideDown(1000).animate({
        "opacity": 1
    });

    // $("#link2").delay(500).fadeIn(1000);
    
});

$("#link2").mouseleave(() => {
    $("#link2").fadeOut(800);
});


$("#text2").slideUp(0).animate({
    "opacity": 0
});


//用click會直接跳上去
$("#more").hover(() => {
    
    $("#text2").delay(500).slideDown(1500).animate({
        "opacity": 1 
    });

    
});

$("#less").mouseenter(() => {
    
    $("#text2").slideUp(1500).animate({
        "opacity": 0 
    });

    
});







