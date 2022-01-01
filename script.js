var x = window.matchMedia("(min-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.getElementById("collapsed-nav").style.display = "none";
        document.getElementById("container-id").style.display = "block";
        document.getElementById("footer").style.display = "block";
    }
  }

function openMenu() {
    if (document.getElementById("collapsed-nav").style.display == "" ||
    document.getElementById("collapsed-nav").style.display == "none") {
        document.getElementById("collapsed-nav").style.display = "flex";
        document.getElementById("container-id").style.display = "none";
        document.getElementById("footer").style.display = "none";
    }
    else{
        document.getElementById("collapsed-nav").style.display = "none";
        document.getElementById("container-id").style.display = "block";
        document.getElementById("footer").style.display = "block";
    }
    
}