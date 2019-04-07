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
document.querySelectorAll("#charter h3 img").forEach(img => {
  img.addEventListener("click", event => {
    let card = event.path[2];
    console.log(card);
    let children = card.children;
    children = [].slice.call(children, 1);
    console.log(children);
    children.forEach(child => {
      if (child.style.display === "block") child.style.display = "none";
      else {
        child.style.display = "block";
        child.style.maxHeight = "100px";
      }
    });
    // let card = event.path[2];
    // card.console // document.querySelector(card);
    // .log(document.querySelector(card));
  });
});
