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
    let children = card.children;
    let ps = [].slice.call(children, 1);
    ps.forEach(p => {
      if (p.style.display === "block") p.style.display = "";
      else p.style.display = "block";
    });
    // let card = event.path[2];
    // card.console // document.querySelector(card);
    // .log(document.querySelector(card));
  });
});
