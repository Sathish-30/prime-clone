function validateInput() {
  var inputField = document.getElementById('inputField');
  var inputValue = inputField.value.trim();

  // Define regex patterns for email and phone number
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number; you may need to adjust this based on your requirements

  // Check if the input matches either email or phone number pattern
  if (emailRegex.test(inputValue)) {
    form.action = "https://prime-clone-sigma.vercel.app/";
  } else if (phoneRegex.test(inputValue)) {
    form.action = "https://prime-clone-sigma.vercel.app/";
  } else {
      alert('Invalid Email or Phone Number');
  }
}