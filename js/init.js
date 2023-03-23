jQuery(document).ready(function($) {
  var time = 300;
  setTimeout(function() {
    $("h1.responsive-headline").fitText(1, { minFontSize: "40px", maxFontSize: "90px" });

    $(window).on("scroll", function() {
      var h = $("header#home").height();
      var y = $(window).scrollTop();
      var nav = $("#nav-wrap");
      var upButton = $("#scrollup-button");

      if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
        nav.fadeOut("fast");
        upButton.fadeOut("fast");
      } else {
        if (y < h * 0.2) {
          nav.removeClass("opaque").fadeIn("fast");
        } else {
          nav.addClass("opaque").fadeIn("fast");
          upButton.fadeIn("fast");
        }
      }
    });
  }, time);
});
