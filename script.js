document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      var scroll = $(window).scrollTop();
      console.log(scroll);
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


  $(".btnmenu").click(function () {
    $(this).parent().parent().toggleClass("show");
    $(".mobile-container").slideToggle("fast");
    $("body").toggleClass("overlay");
  });
  $("#tabs a").click(function(){
    var sel = $(this).data('target');
    $('#tabs li a').removeClass("active");
    $('#tabs .right').removeClass("show");
    $(sel).addClass("show");
    $(this).addClass("active");
  })