window.onload = () => {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();
  let timeGreeting = hour < 12 ? "Good Morning, I Am"
                    : hour < 18 ? "Good Afternoon, I Am"
                    : "Good Evening, I Am";
  greeting.innerHTML = `${timeGreeting} <span>Muhammad Sajjad Hussain</span> 👋`;
};

function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Add event listener for mobile menu toggle if needed
document.addEventListener('DOMContentLoaded', function() {
  // Add any additional functionality here
  
  // Form submission handling
  const contactForm = document.querySelector('.news-col form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      if (email) {
        alert('Thank you for your interest! I will get back to you soon.');
        this.reset();
      } else {
        alert('Please enter your email address.');
      }
    });
  }
});

  const modal = document.getElementById("skillsModal");
  const btn = document.getElementById("skillsBtn");
  const span = modal.querySelector(".close");

  btn.onclick = () => modal.style.display = "block";
  span.onclick = () => modal.style.display = "none";
  window.onclick = (event) => {
    if (event.target === modal) modal.style.display = "none";
  };

