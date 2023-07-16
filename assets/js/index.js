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

// for sections:
const sections = document.querySelectorAll(".section");

// for images:
const cards = document.querySelectorAll(".card-show");

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight * 0.8 && rect.bottom >= windowHeight * 0.2;
};

const handleScroll = () => {
  sections.forEach((section, index) => {
    if (isInViewport(section) && !section.classList.contains("visible")) {
      section.classList.add("visible");

      if (index === 1) {
        const skill = section.querySelectorAll(".skill");
        skill.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 250); // Delay the visibility of each card for a smooth animation
        });
      } else if (index === 2) {
        const cardContainer = section.querySelector(".card-container");
        const card = cardContainer.querySelectorAll(".card-show");
        card.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 250); // Delay the visibility of each card for a smooth animation
        });
      }
    }
  });
};

window.addEventListener("scroll", handleScroll);

// Initial check on page load
handleScroll();
