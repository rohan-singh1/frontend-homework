const button = document.getElementById('button');
const input = document.getElementById('input');
let isStarted = true;
let intervalId;

function generateRandomColor() {
  /**
   * Math floor and random functions sourced from:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */
  const h = Math.floor(Math.random() * 360).toString(); // Hue
  // Saturation capped at 40% for pastel shades instead of glaring colors
  const s = '40%'; // Saturation
  // Value capped at 50% to keep a relatively darker background due to light foreground
  const v = Math.floor(Math.random() * 50).toString(); // Value
  // Alpha capped at 70% for a subdued effect
  const a = '70%'; // Alpha

  const color = `hsl( ${h}, ${s}, ${v}%, ${a})`; // HSV Color
  return color;
}

function changeBackground() {
  /**
   * Changing style property via JavaScript sourced from:
   * https://www.w3schools.com/js/js_htmldom_css.asp
   */
  document.getElementsByTagName(
    'body',
  )[0].style.backgroundColor = generateRandomColor();
}

function handlePageLoad() {
  /**
   * Set Interval function sourced from here:
   * https://developer.mozilla.org/en-US/docs/Web/API/setInterval
   */
  intervalId = setInterval(changeBackground, 3000);
  input.disabled = true;
}

function handleButtonClick() {
  isStarted = !isStarted;
  if (isStarted) {
    button.classList.replace('btn-primary', 'btn-danger');
    input.disabled = true;
    button.innerText = 'Stop';
    intervalId = setInterval(changeBackground, (input.value * 1000).toString());
  } else {
    button.classList.replace('btn-danger', 'btn-primary');
    input.disabled = false;
    button.innerText = 'Start';
    /**
     * Clear Interval function sourced from:
     * https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
     */
    clearInterval(intervalId);
  }
}

/**
 * Window load event code sourced from here:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event
 */
window.addEventListener('load', handlePageLoad);
button.addEventListener('click', handleButtonClick);
