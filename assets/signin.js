const contactInfoInput = document.getElementById('contact-info');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', validateInput);

function validateInput() {
  const inputValue = contactInfoInput.value.trim();
  let isValid = false;  

  // Check for email validity
  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(inputValue)) {
    isValid = true;
  } else {
    // Check for phone number validity (replace with your desired phone number format)
    const phoneNumberRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (phoneNumberRegex.test(inputValue)) {
      isValid = true;
    }
  }

  if (!isValid) {
    alert('Please enter a valid email address or phone number.');
    return;
  }

  // Submit form or perform your desired action
  console.log('Input valid!');
  // ...
}