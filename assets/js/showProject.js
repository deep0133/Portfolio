const cardContainer = document.getElementById("card-container");

const addAllCards = () => {
  let total = "";
  json.forEach((ele) => {
    total += `<div class="card card-show">
      <div class="img">
        <img
          loading="lazy"
          src="${ele.image.url}"
          alt="${ele.image.alt}" />
      </div>
      <p class="title font-mulish">${ele.title}</p>
      <ul class="build-in font-franklin">
        ${ele.tech
          .map((tech) => {
            return `<li class="tech-use">${tech}</li>`;
          })
          .join("")}
      </ul>
      <button class="view-project border-bottom-2 bg-transparent">
        <a
          ${ele.viewProject ? `href="${ele.viewProject}"` : ""}
          target="_blank"
          class="anchor ${ele.viewProject ? "" : "pending"}"
        >View Project
        </a>
      </button>
      <button class="view-code bg-transparent border-bottom-2">
        <a
          href="${ele.viewSourceCode}"
          target="_blank"
          class="anchor"
        >View code
        </a>
      </button>
    </div>`;
  });

  cardContainer.innerHTML = total;
};

addAllCards();
