
// card slide toggle
document.querySelectorAll(".slide .feature-title").forEach(heading => {
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

let features = document.querySelectorAll(".feature");


function fadeIn() {
  [].forEach.call(features, function (feature, i) {
    if (feature.getBoundingClientRect().y < window.innerHeight * 0.9) {
      feature.style.opacity = 1;
    }
    if (feature.getBoundingClientRect().bottom < window.innerHeight) {
      feature.style.opacity = 1;
    }
  });
}
window.onscroll = fadeIn;

window.setTimeout(fadeIn, 500);