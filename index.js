// nav bar
document.querySelector("#nav-button").addEventListener("click", event => {
  let navContent = document.querySelector("#nav-content");
  if (navContent.style.display === "") navContent.style.display = "block";
  else if (navContent.style.display === "block") navContent.style.display = "";
  event.stopPropagation();
});
document.addEventListener("click", event => {
  let navContent = document.querySelector("#nav-content");
  if (navContent.style.display === "block" && !event.path.includes(navContent))
    navContent.style.display = "";
});

// slide toggle
document.querySelectorAll("#charter .card h3").forEach(heading => {
  heading.addEventListener("click", event => {
    let card = event.path[2];
    let cardContent = card.children[1];
    let maxHeight = cardContent.style.maxHeight;
    if (maxHeight === "") cardContent.style.maxHeight = "500px";
    else {
      cardContent.style.maxHeight = "";
    }
  });
});

//carousel
// let featureIndex = 1;
// document
//   .querySelector("#charter .feature button")
//   .addEventListener("click", event => {
//     let thisFeature = event.path[1];
//     thisFeature.style.width = 0;
//   });

let featureSlider = document.querySelector("#feature-slider");
let lastScrollId;
featureSlider.onscroll = function() {
  clearTimeout(lastScrollId);
  lastScrollId = setTimeout(gravitate, 300);
};

function gravitate() {
  let featureWidth = window.innerWidth;
  let scrollPosition = featureSlider.scrollLeft;
  featureSlider.scrollLeft =
    Math.round(scrollPosition / featureWidth) * featureWidth;
}
