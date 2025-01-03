document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();
  
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
  
    const formData = {
      name,
      email,
      message,
    };
  
    fetch('https://formspree.io/f/mzzzjlyb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Formspree Response:', data);
        alert("Thank you for your message! I'll contact you back as soon as possible 🙂");
        e.target.reset();
      })
      .catch(error => {
        console.error('Error occurred:', error);
        alert('There was an issue submitting your message. Please try again.');
      });
  });

document.querySelectorAll('.nav-bar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});