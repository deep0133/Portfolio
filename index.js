console.log("welcome in console:");

// show menu function:
const showMenu = () => {
  let navlinks = document.getElementById("navlinks");
  let classList = navlinks.classList;

  if (classList.contains("hide")) {
    navlinks.classList.add("show");
    navlinks.classList.remove("hide");
  } else {
    navlinks.classList.add("hide");
    navlinks.classList.remove("show");
  }
};
