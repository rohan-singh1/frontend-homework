// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const parentDiv = document.createElement('div');
parentDiv.classList.add('parent-div-01');

const section = document.getElementById('section-01');
section.appendChild(parentDiv);

const createCharacterCard = function createCharacterCard(character) {
  const cardFig = document.createElement('figure');
  cardFig.classList.add('card-figure-01');

  const image = document.createElement('img');
  image.classList.add('display-picture-01');
  image.setAttribute('src', character.imageUrl);
  image.setAttribute('alt', `Display picture of ${character.fullName}`);

  const name = document.createElement('figcaption');
  name.classList.add('full-name-01');
  name.textContent = character.fullName;

  const title = document.createElement('figcaption');
  title.classList.add('title-01');
  title.textContent = character.title;

  cardFig.append(image, name, title);
  parentDiv.appendChild(cardFig);
}

/*
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
async function getGotData() {
  const response = await fetch(url);
  const jsonData = await response.json();
  jsonData.forEach((element) => {
    createCharacterCard(element);
  });
}

getGotData();
