$(document).ready(function() {



  $("button#btnLight").click(function() {
    $("body").removeClass();
    $("body").addClass("light");
  });

  $("button#btnDark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark");
  });

});