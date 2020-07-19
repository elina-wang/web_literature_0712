

$("#link2").fadeOut(0);
$("#link").hover(() => {
    // $("#mes1").slideDown(2000);
    $("#link2").delay(500).fadeIn(1000);


});

$("#link2").mouseleave(
    () => {
        $("#link2").fadeOut(800);

    });