
var menu = document.querySelector("header > div > i");

var nav = document.querySelector("header > nav");

// menu.addEventListener("click", function() {

menu.onclick = function() {

  if (nav.style.display == "flex") {

    nav.style.display = "none";
    menu.classList.add("fa-bars");
    menu.classList.remove("fa-times")


  } else {

    nav.style.display = "flex";
    menu.classList.add("fa-times");
    menu.classList.remove("fa-bars");
  }

};
