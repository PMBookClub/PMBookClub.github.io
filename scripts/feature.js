$(document).ready(function() {

  var images = [
    "images/tidyingup.jpb",
  ];

  var currentIndex = 0;

  $("#slideNext").click(function(){
    if (currentIndex < 1){
      currentIndex = currentIndex + 1;
       document.getElementById("featured").style.backgroundImage = "url(images[currentIndex])";
    }
  });

});
