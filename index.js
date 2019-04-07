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
document.querySelectorAll("#charter .card h3 img").forEach(toggleArrow => {
  toggleArrow.addEventListener("click", event => {
    let card = event.path[2];
    let cardContent = card.children[1];
    let height = cardContent.style.maxHeight;
    if (height === "") cardContent.style.maxHeight = "500px";
    else {
      cardContent.style.maxHeight = "";
    }
  });
});

//carousel
let featureIndex = 1;
document
  .querySelector("#charter .feature button")
  .addEventListener("click", event => {
    let thisFeature = event.path[1];
    thisFeature.style.width = 0;
    // thisFeature.style.height = 0;

    // thisFeature.style.height = 0;

    // thisFeature.style.maxHeight = 0;

    // let featureSlider = event.path[2];
    // let nextFeature = featureSlider.children[featureIndex];

    // console.dir(nextFeature.style.width);
    // nextFeature.style.width = "100%";
    // nextFeature.style.height = "100%";

    // let nextFeature =
  });
