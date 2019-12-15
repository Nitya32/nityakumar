$(".hamburger").click(function(){
    $(".header").toggleClass('show');
});

$(".circle").click(function(event){
    var n = $(this).attr('class').slice(-1);
    $(".parallax" + n).toggleClass('show');
});

$(".close-parallax").click(function(){
   $(".rellax").removeClass("show"); 
});

$(document).click(function(event){
    console.log($(this));
    
    //select the elements you want to close
//    if( )
//    $(".rellax.show").removeClass("show");
})


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
//}