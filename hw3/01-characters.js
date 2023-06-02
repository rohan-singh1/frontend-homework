// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const parentDiv = document.createElement('div');
parentDiv.classList.add('parent-div-01');

const section = document.getElementById('section-01');
section.appendChild(parentDiv);

function createCharacterCard(character) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card-div-01');

  const image = document.createElement('img');
  image.classList.add('display-picture-01');
  image.setAttribute('src', character.imageUrl);
  image.setAttribute('alt', `Display picture of ${character.fullName}`);

  const name = document.createElement('h2');
  name.classList.add('full-name-01');
  name.innerText = character.fullName;

  const title = document.createElement('h3');
  title.classList.add('title-01');
  title.innerText = character.title;

  cardDiv.append(image, name, title);
  parentDiv.appendChild(cardDiv);
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
