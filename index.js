const nav = document.getElementById("nav")

function myFunction(x) {
    if (x.matches) { // If media query matches
      nav.classList.add("fixed-top")
    } else {
        nav.classList.remove("fixed-top")
    }
  }
  
  var x = window.matchMedia("(min-width: 768px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes 