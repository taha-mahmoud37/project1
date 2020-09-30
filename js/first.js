
let aboutOffset= $("#about").offset().top;
$(window).scroll(function(){
let wScroll = $(window).scrollTop();


  if(wScroll > aboutOffset-40)
  {
      $("nav").addClass("bg-black")
      $("#btnUp").fadeIn(500)
  }
  else
  {
    $("nav").removeClass("bg-black")
    $("#btnUp").fadeOut(500)
  }
    
   
})



$("a[class='nav-link']").click(function(){

    let aHref=  $(this).attr("href");
    $("html,body").animate({scrollTop:$(aHref).offset().top} , 500)

})


$("#btnUp").click(function(){


    $("html,body").animate({scrollTop :'0px'} ,1000)
})


$(document).ready(function(){
    $("#loading").fadeOut(100 , function(){
        $("body").css("overflow","auto")
    })
})

new WOW().init();


let colorContainer = $(".color-item");

colorContainer.eq(0).css("background-color" , "#09c")
colorContainer.eq(1).css("background-color" , "lightgreen")
colorContainer.eq(2).css("background-color" , "teal")
colorContainer.eq(3).css("background-color" , "tomata")
colorContainer.eq(4).css("background-color" , "gray")
colorContainer.eq(5).css("background-color" , "lightblue")


$("#colors-container i").click(function(){

    let colorWidth = $("#color").outerWidth(true);

   if($("#colors-container").css("left")=="0px")
   {
    $("#colors-container").animate({left : `-${colorWidth}px`} ,500) 
   }
    else
    {
        $("#colors-container").animate({left : `0px`} ,500) 

    }
})

$("#arrow").click(function(){
    $("html,body").animate({scrollTop:$("#about").offset().top} , 1000)
})

var typed = new Typed('.type', {
    strings: [
               "COWORKING IN THE CITY",
                ],
    typeSpeed:60,
    backSpeed:60,
    loop:true,
  });



  


         