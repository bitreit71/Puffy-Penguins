$(document).ready(function(){
  $(".screen-faq__info-block > i").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content').slideUp(200);
      $(".screen-faq__info-block > i span").removeClass("minus").addClass("plus");
    }else{
      $(".screen-faq__info-block > i span").removeClass("minus").addClass("plus");
      $(this).find("span").removeClass("plus").addClass("minus");
      $(".screen-faq__info-block > i").removeClass("active");
      $(this).addClass("active");
      $('.content').slideUp(200);
      $(this).siblings('.content').slideDown(200);
    }    
  });
});