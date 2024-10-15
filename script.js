// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for demo purposes
  
    let valid = true;
    
    document.querySelectorAll('input, select, textarea').forEach(function(element) {
      if (!element.value) {
        element.classList.add('is-invalid');
        valid = false;
      } else {
        element.classList.remove('is-invalid');
      }
    });
  
    if (valid) {
      alert('Form submitted successfully!');
    } else {
      alert('Please fill in all fields correctly.');
    }
  });
  