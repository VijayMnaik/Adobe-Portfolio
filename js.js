$("h1").css("color","red")
let namee=$(window).width();
setInterval(function() {

    if($(window).width()<975){
        $(".five").addClass('mobile')
        $(".second").css("display","none")
    }
    else{
        $(".five").removeClass('mobile')
        $(".second").css("display","flex")
    }
}, 100);



// myfunction();