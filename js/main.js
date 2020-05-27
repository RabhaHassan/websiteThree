$(function(){ 
   "use strict";
    //navbar
    var winh = $(window).height(),
        upperH =$(".upper-bar").innerHeight(),
        navh =$(".navbar").innerHeight();
    $(".slider ,.carousel-item").height(winh -(upperH+navh));
    
///////////////////Our Auto Slider Code///////////////////////////////// 
 $(".circle span").click(function(){
     var myID =$(this).attr("id");     
     $(this).addClass("active").siblings().removeClass('active');//correct
     
     $("#"+myID+"-content").addClass("active").siblings().removeClass('active');
 });
    
    
    
    
  });  

 