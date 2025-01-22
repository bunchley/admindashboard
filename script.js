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
  const cardShare = document.createElement("div");
  cardShare.classList.add("button-share");
  const star = document.createElement("i");
  star.classList.add("fa-regular", "fa-star");
  cardShare.appendChild(star);
  const eye = document.createElement("i");
  eye.classList.add("fa-regular", "fa-eye");
  cardShare.appendChild(eye);
  const link = document.createElement("i");
  link.classList.add("fa-solid", "fa-share-nodes");
  cardShare.appendChild(link);
  newCard.appendChild(cardShare);
  return newCard;
}

projectContainer.appendChild(createCard());
projectContainer.appendChild(createCard());
projectContainer.appendChild(createCard());
annoucementContainer.appendChild(createCard());
trendingContainer.appendChild(createCard());
