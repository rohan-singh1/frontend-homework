const elem = document.querySelector('input');

function displayText(isOk, message) {
  const outputDiv = document.getElementById('output');
  if (isOk) {
    outputDiv.classList.remove('text-danger');
    outputDiv.classList.add('text-success');
  } else {
    outputDiv.classList.remove('text-success');
    outputDiv.classList.add('text-danger');
  }
  outputDiv.innerHTML = message;
}

function handleInput() {
  const enteredValue = document.getElementById('input').value;

  /**
   * Code to check if a value is numeric or not, sourced from here:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
   */
  if (Number.isNaN(enteredValue)) {
    displayText(false, 'Error! Non-numeric character(s) entered!');
  } else if (enteredValue < 0) {
    displayText(false, 'Error! Negative number entered!');
  } else if (enteredValue === '') {
    displayText(false, '');
  } else {
    /**
     * Code to reverse a string sourced from here:
     * https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
     */
    const enteredStringArray = enteredValue.split('');
    const reversedStringArray = enteredStringArray.reverse();
    const reversedString = reversedStringArray.join('');

    if (enteredValue === reversedString) {
      displayText(true, 'Yes! This is a palindrome!');
    } else {
      displayText(false, 'No. Try again.');
    }
  }
}

elem.addEventListener('input', handleInput);
