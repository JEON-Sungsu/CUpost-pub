$(document).ready(function(){
    
    // 스크롤 탑-모바일
    var mybutton2 = document.getElementById("myBtn-mob");
    window.onscroll = function() {scrollFunction()};
    // function scrollFunction() {
    //     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    //         mybutton2.style.display = "block";
    //     } else {
    //         mybutton2.style.display = "none";
    //     }
    // }
    function topFunctionMob() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    $('.checking-input').on('keydown',function(){
        $(this).next('.input-btn-left').css('opacity',1)
    })
   
    $('.input-btn-right .ic-pass').on('click',function(){
        console.log(this)
    })

    
});

