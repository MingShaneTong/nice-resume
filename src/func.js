import $ from "jquery";

export function scrollTo(target) {
    var $target = $(target);
  
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top
        },
        800,
        "swing"
      );
}
  