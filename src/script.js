// eventhandler moves scroll-icon on scrolldown
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  let icon = document.getElementById("scrollIcon")
  let endScrollAnchor = document.getElementsByTagName('h3')
  //console.log(endScrollAnchor)
  if (prevScrollpos < currentScrollPos) {
    icon.style.bottom = "2%";
  }
  if (window.pageYOffset > 1400) {
    icon.style.display = "none"
  }
  else{
    icon.style.display = "block"}
  prevScrollpos = currentScrollPos;
}

//Intersectoin observer shows burger when user scrolls to .stars
if (
  "IntersectionObserver" in window &&
  "IntersectionObserverEntry" in window &&
  "intersectionRatio" in window.IntersectionObserverEntry.prototype
) {
  let observer = new IntersectionObserver(entries => {
    let burger = document.getElementById('burgerMenu')
  if (entries[0].boundingClientRect.y < 0) {
    burger.style.display = "block"
    burger.style.right = "0";
  } else {
    burger.style.right = "-500px";
  }
  if(document.URL.indexOf("modal") >= 0){
    burger.style.display = "none"

  }
});
observer.observe(document.querySelector(".anchor"));
}
