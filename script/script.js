$(document).ready(function() {
    $(".hamburger").click(function(){
    $(".header").toggleClass('show');
});

$(".circle").click(function(event){
    var n = $(this).attr('class').slice(-1);
    $(".rellax").each(function() {
        $(this).removeClass('show')
    })
    $(".parallax" + n).toggleClass('show');
    $([document.documentElement, document.body]).animate({
        scrollTop: $('.parallax'+n).offset().top
    }, 500)
});

$(".close-parallax").click(function(){
   $(".rellax").removeClass("show"); 
});

$(document).click(function(event){
    console.log($(this));
    
//$(".header3").click(function() {
//    $(".lax7").toggleClass('show_2');
//});

    
    //select the elements you want to close
//    if( )
//    $(".rellax.show").removeClass("show");
});


//
//var parallax = document.getElementById("parallax");
//var circle1 = document.getElementById("circle1");
//circle1.onclick = function() {
//    parallax.style.display = "block";
//                             }

//window.onclick = function(event) {
//    
//
//    if(event.target == parallax) {
//        parallax.style.display = "none";
//    }
//       
//

})