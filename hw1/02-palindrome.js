const elem = document.querySelector('input');

elem.addEventListener('input', handleInput);

function handleInput() {
  const outputDiv = document.getElementById('output');
  const enteredValue = document.getElementById('input').value;

  if (enteredValue < 0) {
    outputDiv.classList.remove('text-success');
    outputDiv.classList.add('text-danger');
    outputDiv.innerHTML = 'Error! Negative number entered!';
  } else if (enteredValue === '') {
    outputDiv.classList.remove('text-success');
    outputDiv.classList.remove('text-danger');
    outputDiv.innerHTML = '';
  } else {
    // Code to reverse number sourced from my previous assignment: 
    // https://github.com/rohan-singh1/student-repo-fullstack/blob/main/hw2/02-reverse.js
    let result = 0;
    for (let i = enteredValue; Math.floor(i) > 0; i /= 10) {
      i = Math.floor(i);
      l_digit = i % 10;
      l_digit = Math.floor(l_digit);
      result = result * 10 + l_digit;
    }

    if (enteredValue == result) {
      outputDiv.classList.add('text-success');
      outputDiv.classList.remove('text-danger');
      outputDiv.innerHTML = 'Yes! This is a palindrome!';
    } else {
      outputDiv.classList.remove('text-success');
      outputDiv.classList.add('text-danger');
      outputDiv.innerHTML = 'No. Try again.';
    }
  }
}
