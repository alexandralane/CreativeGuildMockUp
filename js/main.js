//Login and free trial boostrap modals
var elements = $(".modal-overlay, .modal");

$("button").click(function () {
  elements.addClass("active");
});

$(".close-modal").click(function () {
  elements.removeClass("active");
});

$(function() {
  $('.monthly').addClass('active');
});


// Price plan switch from Annually pricing to Monthly pricing
$(document).ready(function(){
  $(".annually").click(function(){
  	$(".monthly-price").hide();
  	$(".annual-price").css('display', 'flex');
    $('.monthly').removeClass('active');
    $('.annually').addClass('active');
  });
  $(".monthly").click(function(){
    $(".annual-price").hide();
    $(".monthly-price").css('display', 'flex');
    $('.annually').removeClass('active');
    $('.monthly').addClass('active');
  });
});