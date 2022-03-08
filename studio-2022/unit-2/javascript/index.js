$(".js-open-modal1").click(function(){
  $(".modal").addClass("visible");
});

$(".js-close-modal1").click(function(){
  $(".modal").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".js-open-modal1").length) {
    $("body").find(".modal").removeClass("visible");
  }
});

$(".js-open-modal2").click(function(){
  $(".modal").addClass("visible");
});

$(".js-close-modal2").click(function(){
  $(".modal").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".js-open-modal1").length) {
    $("body").find(".modal").removeClass("visible");
  }
});

$(".js-open-modal3").click(function(){
  $(".modal").addClass("visible");
});

$(".js-close-modal3").click(function(){
  $(".modal").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".js-open-modal3").length) {
    $("body").find(".modal").removeClass("visible");
  }
});

$(".js-open-modal4").click(function(){
  $(".modal").addClass("visible");
});

$(".js-close-modal4").click(function(){
  $(".modal").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".js-open-modal4").length) {
    $("body").find(".modal").removeClass("visible");
  }
});

$(".js-open-modal5").click(function(){
  $(".modal").addClass("visible");
});

$(".js-close-modal5").click(function(){
  $(".modal").removeClass("visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".js-open-modal5").length) {
    $("body").find(".modal").removeClass("visible");
  }
});

