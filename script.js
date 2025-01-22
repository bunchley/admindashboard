const projectContainer = document.querySelector(".projects");
const annoucementContainer = document.querySelector(".anouncement-grid");
const trendingContainer = document.querySelector(".trending-grid");
function createCard() {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  const title = document.createElement("div");
  title.textContent = "Title";
  title.classList.add("card-title");
  newCard.appendChild(title);
  const summary = document.createElement("p");
  summary.textContent = "stuff to describe project";
  newCard.appendChild(summary);
  return newCard;
}

projectContainer.appendChild(createCard());
projectContainer.appendChild(createCard());
projectContainer.appendChild(createCard());
annoucementContainer.appendChild(createCard());
trendingContainer.appendChild(createCard());
