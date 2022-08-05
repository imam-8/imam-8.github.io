document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      document.getElementById("topnav").classList.add("fixed-top");
      // add padding top to show content behind navbar
    } else {
      document.getElementById("topnav").classList.remove("fixed-top");
      // remove padding top from body
    }
  });
});
// DOMContentLoaded  end

$(document).ready(function () {
  $(".btnmenu").click(function () {
    $(this).parent().parent().toggleClass("show");
    $(".mobile-container").slideToggle("fast");
    $("body").toggleClass("overlay");
  });
  $("#tabs li a").click(function () {
    var sel = $(this).data("target");
    $("#tabs li a").removeClass("active");
    $("#tabs .right").removeClass("show");
    $(sel).addClass("show");
    $(this).addClass("active");
  });
  
var option = "";
var active = "";
var selecteditem = 0;
var total = 0;
var tabctrl = $('.tabctrl');
tabctrl.each(function(index){
  var target = $(this).attr("data-target");
var label = $(this).html();
var cname = $(this).attr("class");
var scname = JSON.stringify(cname);
if(scname.includes("active")){
  active = label;
  selecteditem = index;
}
total++;
option += "<option value='"+target+"'>"+label+"</option>";
});
console.log(selecteditem);
if(selecteditem < total){
  $(".nextTab").addClass("selactive");
}else if(selecteditem == total){
  $(".nextTab").removeClass("selactive");
}
if(selecteditem > 0){
  $(".prevTab").addClass("selactive");
}else if(selecteditem == 0){
  $(".prevTab").removeClass("selactive");
}
$("select.change").html(option);
});