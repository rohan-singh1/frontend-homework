/* global Chart */

const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const houses = [''];
houses.length = 0;
const houseQuantityMap = new Map();
let houseQuantity = [1];

function processCharacter(character) {
  const house = character.family;
  let found = false;

  if (houses.length === 0) {
    houses.push(house);
    houseQuantityMap.set(house, 1);
  } else {
    houses.forEach((element) => {
      if (element.includes(house) || house.includes(element)) {
        found = true;
        houseQuantityMap.set(element, houseQuantityMap.get(element) + 1);
      }
    });
    if (!found) {
      houses.push(house);
      houseQuantityMap.set(house, 1);
    }
  }
}

const renderChart = () => {
  const donutChart = document.querySelector('.donut-chart');
  const chart = new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: houses,
      datasets: [
        {
          label: 'My First Dataset',
          data: houseQuantity,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
    },
  });
  chart.update();
};

async function getGotData() {
  const response = await fetch(url);
  const jsonData = await response.json();

  jsonData.forEach((element) => {
    processCharacter(element);
  });

  houses.splice(11, houses.length - 11);
  houseQuantity = Array.from(houseQuantityMap.values());
  houseQuantity.splice(11, houseQuantity.length - 11);

  renderChart();
}

getGotData();
