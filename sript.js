document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from reloading the page
  
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
  
    if (name && email && message) {
      console.log('Form Submitted:', { name, email, message });
      alert('Thank you for your message!');
      e.target.reset(); // Clear the form
    } else {
      alert('Please fill in all fields.');
    }
  });
  