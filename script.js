function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("collapsed_nav").style.display = "none";
        document.getElementById("container_id").style.display = "block";
        document.getElementById("footer").style.display = "block";
    }
  }
  
  var x = window.matchMedia("(min-width: 721px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes


function openMenu() {
    if (document.getElementById("collapsed_nav").style.display == "" ||
    document.getElementById("collapsed_nav").style.display == "none") {
        document.getElementById("collapsed_nav").style.display = "flex";
        document.getElementById("container_id").style.display = "none";
        document.getElementById("footer").style.display = "none";
    }
    else{
        document.getElementById("collapsed_nav").style.display = "none";
        document.getElementById("container_id").style.display = "block";
        document.getElementById("footer").style.display = "block";
    }
    
}