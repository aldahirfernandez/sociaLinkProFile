const createCard = () => {
  const card = document.createElement("div");
  card.className = "container";
  
  const image = document.createElement("img");
  image.src = "./assets/images/avatar-jessica.jpeg";
  image.className = "img";
  
  const heading = document.createElement("h1");
  heading.textContent = "Jessica Randall";
  
  const location = document.createElement("span");
  location.textContent = " London, United Kingdom";
  
  const description = document.createElement("p");
  description.textContent = '"Front-end developer and avid reader."';
  
  const sLinks = document.createElement("ul");
  
  const socialSites = ["GitHub", "Fronend Mentor", "LinkedIn", "Twitter", "Instagram"];
  
  socialSites.forEach(link => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = link;
    listItem.appendChild(button);
    sLinks.appendChild(listItem);
  });
  
  card.appendChild(image);
  heading.appendChild(location);
  card.appendChild(heading);
  card.appendChild(description);
  card.appendChild(sLinks);
  
  return card;
};

const mountPoint = document.querySelector("#app");
const addCardButton = document.querySelector("#addCardButton");

const addCard = () => {
  mountPoint.appendChild(createCard());
};
  
    // Evento para agregar una nueva card al hacer clic en el botón "Agregar Cards"
addCardButton.addEventListener("click", addCard);
