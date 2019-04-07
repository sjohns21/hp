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
document.querySelectorAll("#charter h3 img").forEach(toggleArrow => {
  toggleArrow.addEventListener("click", event => {
    let card = event.path[2];
    let cardContent = card.children[1];
    let height = cardContent.style.maxHeight;
    if (height === "") cardContent.style.maxHeight = "100px";
    else {
      cardContent.style.maxHeight = "";
    }
  });
});
setTimeout(() => (document.querySelector(".test").style.maxHeight = "100px"));
