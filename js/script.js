

$(document).ready(function(){
    

    $('.checking-input').on('keydown',function(){
        $(this).next('.input-btn-left').css('opacity',1)
    })
   
    $('.input-btn-right .ic-pass').on('click',function(){
        console.log(this)
    })

    os = mobileOs();

    if(os == "android"){
        $("body").addClass("android");
    }
    else if(os == "ios"){
        //$("body").addClass("ios");
    }

   
});

// android, ios 체크
function mobileOs(){
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
    if ( varUA.indexOf('android') > -1) {
        //안드로이드
        return "android";
    } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
        //IOS
        return "ios";
    }
    return "local";
}

    // var window = $(window);
	var body = $('body');
    var mybutton = document.getElementById("myBtn-text");
    var mybutton2 = document.getElementById("myBtn-mob");
    
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            mybutton.style.display = "block";
            mybutton2.style.display = "block";
        } else {
            mybutton.style.display = "none";
            mybutton2.style.display = "none";
        }
    }
    function topFunctionMob() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
