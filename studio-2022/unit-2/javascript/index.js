$(".js-open-modal1").click(function(){
  $(".modal1").addClass("visible");
});

$(".js-close-modal1").click(function(){
  $(".modal1").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".modal1, .js-open-modal1").length) {
    $("body").find(".modal1").removeClass("visible");
  }
});

$(".js-open-modal2").click(function(){
  $(".modal2").addClass("visible");
});

$(".js-close-modal2").click(function(){
  $(".modal2").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".modal2, .js-open-modal1").length) {
    $("body").find(".modal2").removeClass("visible");
  }
});

$(".js-open-modal3").click(function(){
  $(".modal3").addClass("visible");
});

$(".js-close-modal3").click(function(){
  $(".modal3").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".modal3, .js-open-modal3").length) {
    $("body").find(".modal3").removeClass("visible");
  }
});

$(".js-open-modal4").click(function(){
  $(".modal4").addClass("visible");
});

$(".js-close-modal4").click(function(){
  $(".modal4").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".modal4, .js-open-modal4").length) {
    $("body").find(".modal4").removeClass("visible");
  }
});

$(".js-open-modal5").click(function(){
  $(".modal5").addClass("visible");
});

$(".js-close-modal5").click(function(){
  $(".modal5").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".modal5, .js-open-modal5").length) {
    $("body").find(".modal5").removeClass("visible");
  }
});

