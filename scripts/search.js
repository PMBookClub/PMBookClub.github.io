$(document).ready(function(){

  $("#searchInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#allbooks figure").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

})
