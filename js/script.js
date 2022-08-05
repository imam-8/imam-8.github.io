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
    var index = data.indexOf(sel);
    selecteditem = index;
    if (selecteditem < total - 1) {
      $(".nextTab").addClass("selactive");
    } else if (selecteditem == total - 1) {
      $(".nextTab").removeClass("selactive");
    }
    if (selecteditem > 0) {
      $(".prevTab").addClass("selactive");
    } else if (selecteditem == 0) {
      $(".prevTab").removeClass("selactive");
    }
    $("select.change").val(sel).change();
  });
  var data = [];
  var option = "";
  var active = "";
  var selecteditem = 0;
  var total = 0;
  var tabctrl = $(".tabctrl");
  var menulist = $(".menu-list a");
  var option2 ="";
  menulist.each(function(){
    var target = $(this).attr("href");
    var label  = $(this).html();
    option2 += "<option value='" + target + "'>" + label + "</option>";
  })
  var menuselect = $(".menuselect")
  menuselect.html(option2);
  menuselect.on("change",function(){
    var target = $(this).val();
    $('html, body').animate({
      scrollTop: $("div"+target).offset().top
    },300);
  });
  tabctrl.each(function (index) {
    var target = $(this).attr("data-target");
    var label = $(this).html();
    var cname = $(this).attr("class");
    data.push(target);
    if (cname == "tabctrl active") {
      active = label;
      selecteditem = index;
      option +=
        "<option value='" + target + "' selected>" + label + "</option>";
    } else {
      option += "<option value='" + target + "'>" + label + "</option>";
    }
    total++;
  });
  if (selecteditem < total - 1) {
    $(".nextTab").addClass("selactive");
  } else if (selecteditem == total - 1) {
    $(".nextTab").removeClass("selactive");
  }
  if (selecteditem > 0) {
    $(".prevTab").addClass("selactive");
  } else if (selecteditem == 0) {
    $(".prevTab").removeClass("selactive");
  }
  $("select.change").html(option);
  $(".nextTab").on("click", function () {
    if (selecteditem < total - 1) {
      selecteditem++;
      var sel = data[selecteditem];
      $("select.change").val(sel).change();
      changetab(sel, selecteditem);
      if (selecteditem == total - 1) {
        $(".nextTab").removeClass("selactive");
      }
      if (selecteditem > 0) {
        $(".prevTab").addClass("selactive");
      }
    } else {
      $(".nextTab").removeClass("selactive");
    }
  });
  $(".prevTab").on("click", function () {
    if (selecteditem > 0) {
      selecteditem--;
      var sel = data[selecteditem];
      $("select.change").val(sel).change();
      changetab(sel, selecteditem);
      if (selecteditem == 0) {
        $(".prevTab").removeClass("selactive");
      }
      if (selecteditem < total) {
        $(".nextTab").addClass("selactive");
      }
    } else {
      $(".prevTab").removeClass("selactive");
    }
  });
  $("select.change").on("change", function () {
    var sel = $(this).val();
    var index = data.indexOf(sel);
    selecteditem = index;
    if (selecteditem < total - 1) {
      $(".nextTab").addClass("selactive");
    } else if (selecteditem >= total - 1) {
      $(".nextTab").removeClass("selactive");
    }
    if (selecteditem > 0) {
      $(".prevTab").addClass("selactive");
    } else if (selecteditem == 0) {
      $(".prevTab").removeClass("selactive");
    }
    changetab(sel, index);
  });
  function changetab(sel, index) {
    $("#tabs li a").removeClass("active");
    $("#tabs .right").removeClass("show");
    $(sel).addClass("show");
    document.getElementsByClassName("tabctrl")[index].classList.add("active");
  }
});
