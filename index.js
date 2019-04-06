document.querySelector("#nav-button").addEventListener("click", event => {
  let navContent = document.querySelector("#nav-content");
  // if (navContent.style.display === "none") navContent.style.display = "block";
  if (navContent.style.display === "") navContent.style.display = "block";
  else if (navContent.style.display === "block") navContent.style.display = "";
  event.stopPropagation();
});
document.addEventListener("click", event => {
  let navContent = document.querySelector("#nav-content");
  if (navContent.style.display === "block" && !event.path.includes(navContent))
    navContent.style.display = "";
});
