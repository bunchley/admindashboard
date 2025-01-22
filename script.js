const projectContainer = document.querySelector(".projects");
const announcementContainer = document.querySelector(".announcements");
const trendingContainer = document.querySelector(".trending-grid");

function Project(title, summary, cardType) {
  this.title = title;
  this.summary = summary;
  this.cardType = cardType;
}
const project1 = new Project(
  "Fellow Botanist",
  "Created a blog to share garden news, composting, different plants, and zone 5b specific information for local colorado gardeners.",
  "project"
);
const project2 = new Project(
  "Black Hat Studio",
  "Created a business website to display art, share news, and link artists to other artists around the world.",
  "project"
);
const project3 = new Project(
  "Rock Paper Scissors",
  "Created a online version of Rock Paper Scissors. You play against a computer and after 5 rounds a winner is made. ",
  "project"
);
const project4 = new Project(
  "Etch A Sketch",
  "Created an online Etch A Sketch game. Move your mouse over the grid to design anything you wish. The more you move over a square the darker the color gets.",
  "project"
);
const project5 = new Project(
  "Calculator",
  "Created an online calculator. This calculator computes quickly what our brain has to work hard for.",
  "project"
);
const project6 = new Project(
  "Recipe Blog",
  "Created a blog to store all my favorite recipes. ",
  "project"
);
const annouce1 = new Project(
  "Admin Dashboard",
  "Creating a admin dashboard project to highlight css skills.",
  "annoucement"
);
const annouce2 = new Project(
  "System Maintenance",
  "Creating a admin dashboard project to highlight css skills.",
  "annoucement"
);
const annouce3 = new Project(
  "Admin Dashboard",
  "Creating a admin dashboard project to highlight css skills.",
  "annoucement"
);
function addAnnouncement(announceTitle, announceSummary, annouceNumber) {
  const title = document.createElement("div");
  title.classList.add("card-title");
  title.classList.add("announce");
  title.textContent = announceTitle;
  announcementContainer.appendChild(title);
  const summary = document.createElement("p");
  summary.classList.add("announce-summary");
  summary.textContent = announceSummary;
  announcementContainer.appendChild(summary);
  if (annouceNumber != 3) {
    const newLine = document.createElement("hr");
    announcementContainer.appendChild(newLine);
  }
}
function createCard(projectTitle, projectSummary, cardType) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  const title = document.createElement("div");
  title.textContent = projectTitle;
  title.classList.add("card-title");
  newCard.appendChild(title);
  const summary = document.createElement("p");
  summary.textContent = projectSummary;
  newCard.appendChild(summary);
  console.log(cardType);
  if (cardType === "project") {
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
  }
  if (cardType === "annoucement") {
    addAnotherAnnoucement(newCard);
  }
  return newCard;
}

projectContainer.appendChild(
  createCard(project1.title, project1.summary, project1.cardType)
);
projectContainer.appendChild(
  createCard(project2.title, project2.summary, project2.cardType)
);
projectContainer.appendChild(
  createCard(project3.title, project3.summary, project3.cardType)
);
projectContainer.appendChild(
  createCard(project4.title, project4.summary, project4.cardType)
);
projectContainer.appendChild(
  createCard(project5.title, project5.summary, project5.cardType)
);
projectContainer.appendChild(
  createCard(project6.title, project6.summary, project6.cardType)
);

addAnnouncement(annouce1.title, annouce1.summary, 1);
addAnnouncement(annouce2.title, annouce2.summary, 2);
addAnnouncement(annouce3.title, annouce3.summary, 3);
