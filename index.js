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

// card slide toggle
document.querySelectorAll(".card .feature-title").forEach(heading => {
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

///////// carousel
// let featureIndex = 1;
// document
//   .querySelector("#charter .feature button")
//   .addEventListener("click", event => {
//     let thisFeature = event.path[1];
//     thisFeature.style.width = 0;
//   });

///////// horizontal feature slider
// let featureSlider = document.querySelector("#feature-slider");
// let lastScrollId;
// featureSlider.onscroll = function() {
//   clearTimeout(lastScrollId);
//   lastScrollId = setTimeout(gravitate, 300);
// };

// function gravitate() {
//   let featureWidth = window.innerWidth;
//   let scrollPosition = featureSlider.scrollLeft;
//   featureSlider.scrollLeft =
//     Math.round(scrollPosition / featureWidth) * featureWidth;
// }

//vertical feature slider
// let featureSlider = document.querySelector("#feature-slider");
// let featureSliderIndex = 0;

// featureSlider.children[featureSliderIndex].style.width = "100%";

// fade ins
// let features = document.querySelector("#feature-container").children;
let features = document.querySelectorAll(".feature");

// v1

// v2
// [].forEach.call(features, function(feature, i) {
//   if (feature.getBoundingClientRect().y < window.innerHeight * 0.8) {
//     feature.style.opacity = 1;
//   }
//   if (feature.getBoundingClientRect().bottom < window.innerHeight) {
//     feature.style.opacity = 1;
//   }
// });

function fadeIn() {
  [].forEach.call(features, function(feature, i) {
    if (feature.getBoundingClientRect().y < window.innerHeight * 0.9) {
      feature.style.opacity = 1;
    }
    if (feature.getBoundingClientRect().bottom < window.innerHeight) {
      feature.style.opacity = 1;
    }
  });
}
window.onscroll = fadeIn;

// window.setTimeout(function() {
//   features[0].style.opacity = 1;
// }, 500);
window.setTimeout(fadeIn, 500);
