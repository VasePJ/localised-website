$(function() {
  var bgImages = [
    "img/bg-home-1us.jpg",
    "img/bg-home-2fr.jpg",
    "img/bg-home-3japan.jpg",
    "img/bg-home-4de.jpg"
  ];
  var imgBgsmall = [
    "img/bg2-home-1en.png",
    "img/bg2-home-2fr.png",
    "img/bg2-home-3jp.png",
    "img/bg2-home-4de.png"
  ];
  var num = 0;
  function spin() {
    $("#hero-image").css("background-image", "url('" + bgImages[num] + "')");
    $("#imgRight").css("background-image", "url('" + imgBgsmall[num] + "')");
    if (num === 3) {
      num = 0;
    } else {
      num++;
    }
  }

  setInterval(spin, 3000);

  var countries = $(".country");
  var numOne = 0;
  function spinRedline() {
    for (let i = 0; i < 3; i++) {
      if (i == numOne) {
        countries[i].classList.add("intro");
      } else {
        countries[i].classList.remove("intro");
      }
    }
    numOne++;
    if (numOne >= 3) {
      numOne = 0;
    }
  }
  if (countries.length > 0) {
    setInterval(spinRedline, 3000);
  }

  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop === 0) {
      $("#showUpTextOne").hide();
      $("#showUpTextTwo").hide();
      $("#btnLearnMore").hide();
      $(".showOnScroll1").hide();
      $(".showOnScroll2").hide();
      $(".showOnScroll3").hide();
      $(".showOnScroll4").hide();
    } else {
      $("#showUpTextOne").fadeIn(1000);
      $("#showUpTextTwo").fadeIn(3000);
      $("#btnLearnMore").fadeIn(5000);
      $(".showOnScroll1").fadeIn(5000);
      $(".showOnScroll2").fadeIn(7000);
      $(".showOnScroll3").fadeIn(9000);
      $(".showOnScroll4").fadeIn(10000);
    }
  });

  $(window).scroll(function() {
    var scrollNavBar = $(window).scrollTop();
    if (scrollNavBar >= 200) {
      $("#navBar").addClass("navBarScroll");
      $("#navigation").addClass("ulListNavBar ");
      $(".navbar-brand img").attr("src", "img/logo-glyph-black-eb012a8d0d.svg");
    } else {
      $("#navBar").removeClass("navBarScroll");
      $("#navigation").removeClass("ulListNavBar");
      $(".navbar-brand img").attr("src", "img/logo-glyph-white-585e89bacf.svg");
    }
  });

  $(".showOnHover").hover(function() {
    $(this).css("display", "block");
  });
  var vheight = $("#img").height();
  $("#slideUp").click(function() {
    $("#img").animate(
      {
        scrollTop: (Math.ceil($("#img").scrollTop() / vheight) - 1) * vheight
      },
      500
    );
  });
  $("#slideDown").click(function() {
    $("#img").animate(
      {
        scrollTop: (Math.floor($("#img").scrollTop() / vheight) + 1) * vheight
      },
      500
    );
  });

  $(window).scroll(function() {
    var redLineScroll = $(window).scrollTop();
    if (redLineScroll === 0) {
      $("#rlPin").hide();
    } else {
      $("#rlPin").fadeIn(8000);
    }
  });
  $("#btnJp").click(function() {
    $("#imgJP").show();
    $("#imgEN").hide();
    $("#btnJp").css("background-color", "black");
    $("#btnJp").css("border", "1px solid black");

    $("#btnJp").css("color", "white");
    $("#btnEn").css("background-color", "buttonface");
    $("#btnEn").css("color", "black");
  });
  $("#btnEn").click(function() {
    $("#imgEN").show();
    $("#imgJP").hide();
    $("#btnEn").css("background-color", "black");
    $("#btnEn").css("color", "white");
    $("#btnEn").css("border", "1px solid black");
    $("#btnJp").css("background-color", "buttonface");
    $("#btnJp").css("color", "black");
  });

  var imgBgsmallOne = [
    "img/ben-kolde-430912-unsplash.jpg",
    "img/campaign-creators-771730-unsplash.jpg",
    "img/kristian-egelund-420683-unsplash.jpg"
  ];

  // services
  $("#panelCoding").click(function() {
    $("#imgRightServices").css(
      "background-image",
      "url('" + imgBgsmallOne[0] + "')"
    );
  });
  $("#panelMarketing").click(function() {
    $("#imgRightServices").css(
      "background-image",
      "url('" + imgBgsmallOne[1] + "')"
    );
  });
  $("#panelBranding").click(function() {
    $("#imgRightServices").css(
      "background-image",
      "url('" + imgBgsmallOne[2] + "')"
    );
  });

  var panels = $(".panelGroups");
  var numOnePanels = 0;
  function spinRedlinePanels() {
    console.log(panels);
    for (let i = 0; i < 3; i++) {
      if (i == numOnePanels) {
        panels[i].classList.add("redPanels");
      } else {
        panels[i].classList.remove("redPanels");
      }
    }
    numOnePanels++;
    if (numOnePanels >= 3) {
      numOnePanels = 0;
    }
  }
  if (panels.length > 0) {
    setInterval(spinRedlinePanels, 3000);
  }

  //services
  var services = $(".titles ");
  var numTwo = 0;
  function spinRedTitles() {
    for (let i = 0; i < 3; i++) {
      if (i == numTwo) {
        services[i].classList.add("redLettersServices");
      } else {
        services[i].classList.remove("redLettersServices");
      }
    }
    numTwo++;
    if (numTwo >= 3) {
      numTwo = 0;
    }
  }
  if (services.length > 0) {
    setInterval(spinRedTitles, 3000);
  }

  $.global = new Object();
  $.global.item = 1;
  $.global.total = 0;
  $(document).ready(function() {
    $("#slides li:nth-child(1)").removeClass("buried");

    var SlideCount = $("#slides li").length;

    $.global.total = SlideCount;

    $("#left").click(function() {
      Slide("back");
    });
    $("#right").click(function() {
      Slide("forward");
    });
  });

  function Slide(direction) {
    if (direction == "back") {
      var $target = $.global.item - 1;
    }
    if (direction == "forward") {
      var $target = $.global.item + 1;
    }

    if ($target == 0) {
      DoIt($.global.total);
    } else if ($target > $.global.total) {
      DoIt(1);
    } else {
      DoIt($target);
    }
  }

  function DoIt(target) {
    $(".slide").addClass("buried");
    $.global.item = target;
    var $newtarget = $("#slides li:nth-child(" + target + ")");
    $newtarget.removeClass("buried");
  }

  function theTime() {
    let now = new Date();
    const min = now.getMinutes();
    const minDegrees = min * 6 + 0;
    $(".min-hand").css({ transform: `rotate(${minDegrees}deg)` });
    const hour = now.getUTCHours();
    //const hourDegrees1 = (hour * 30 - 120) + 90;
    const hourDegrees1 = hour * 30 - 180 + 60;
    $(".hour-hand1").css({ transform: `rotate(${hourDegrees1}deg)` });
    //const hourDegrees2 = (hour * 30) + 90;
    const hourDegrees2 = hour * 30 - 30 + 60;
    $(".hour-hand2").css({ transform: `rotate(${hourDegrees2}deg)` });
    //const hourDegrees3 = (hour * 30 + 60) + 90;
    const hourDegrees3 = hour * 30 - 180 + 60;
    $(".hour-hand3").css({ transform: `rotate(${hourDegrees3}deg)` });
    //const hourDegrees4 = (hour * 30 + 30) + 90;
    const hourDegrees4 = hour * 30 + 180 + 60;
    $(".hour-hand4").css({ transform: `rotate(${hourDegrees4}deg)` });

    const hourDegrees5 = hour * 30 + 30 + 60;
    $(".hour-hand5").css({ transform: `rotate(${hourDegrees5}deg)` });

    const hourDegrees6 = hour * 30 + 0 + 60;
    $(".hour-hand6").css({ transform: `rotate(${hourDegrees6}deg)` });
  }
  setInterval(theTime, 60000);
  theTime();
  var menuOpened = false;
  $("#btnNavBar").click(function() {
    if (menuOpened) {
      $(".nav").removeClass("navBar");
      menuOpened = false;
    } else {
      $(".nav").addClass("navBar");
      menuOpened = true;
    }
  });
});
document.getElementById("myPg").onclick = function() {
  location.href = "company.html";
};
document.getElementById("myPgone").onclick = function() {
  location.href = "companytwo.html";
};
