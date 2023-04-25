const form = document.getElementById('form');

function handleFormSubmit() {
  const fullName = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const registration = document.getElementById('registration');
  const regText = registration.options[registration.selectedIndex].text;

  /**
   * Checkbox code sourced from:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
   */
  const isPl = document.getElementById('programming-languages').checked;
  const isOs = document.getElementById('operating-systems').checked;
  const isFs = document.getElementById('full-stack').checked;
  const anythingElse = document.getElementById('anything-else').value;

  /**
   * Console group code sourced from:
   * https://developer.mozilla.org/en-US/docs/Web/API/console/group
   */
  console.group('Submitted Data');
  console.log(`Full Name: ${fullName}`);
  console.log(`Email: ${email}`);
  console.log(`Registration Status: ${regText}`);

  let coursesTaken = '';
  if (isPl) {
    coursesTaken += 'Programming Languages. ';
  }
  if (isOs) {
    coursesTaken += 'Operating Systems. ';
  }
  if (isFs) {
    coursesTaken += 'Full Stack Web Development. ';
  }
  if (!isPl && !isOs && !isFs) {
    coursesTaken += 'None';
  }
  console.log(`Courses Taken: ${coursesTaken}`);
  console.log(`Anything else: ${anythingElse}`);

  console.groupEnd();
}

/**
 * Submit event sourced from:
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
 */
form.addEventListener('submit', handleFormSubmit);
