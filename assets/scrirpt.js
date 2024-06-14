function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
function revealx() {
    var reveals = document.querySelectorAll(".revealx");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().right;
      var elementVisible = 100;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}
function autoScrollDown() { 
    var windowHeight = window.innerHeight;
    window.scrollBy(0, windowHeight); 
} 
setTimeout(autoScrollDown, 4000);
var hey = document.getElementById('splash')
function hundle() {
    hey.style = 'display:none;';
}
setTimeout(hundle,1500)