// same as document ready in jQuery
$(document).ready(function() {
$("#title").html(movies.Titanic.title);
$("#Terminator-2").on("click", function() {
  $("#title").html(movies.Terminator2.title);
});
});