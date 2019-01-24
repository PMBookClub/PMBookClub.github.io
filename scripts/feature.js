$(document).ready(function() {

  var slideIndex = 1;
  showDivs(slideIndex);

  $("#img-clck").click(function(){
    showDivs(slideIndex += 1);
  });

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("feature");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
  }

});
