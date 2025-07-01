
    //main
    
    const toggleBtn = document.getElementById('mode-toggle');
    const body = document.body;

    // Initialize based on previous preference (optional)
    if (localStorage.getItem('theme') === 'light') {
      body.classList.add('light-mode');
      toggleBtn.textContent = 'Dark Mode';
    }

    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      if (body.classList.contains('light-mode')) {
        toggleBtn.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
      } else {
        toggleBtn.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
      }
    });

// Mobile menu toggle functionality
  function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('active');
  }

// Review form submission
    const form = document.getElementById('reviewForm');
    const list = document.getElementById('reviewList');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = form.name.value.trim();
      const driver = form.driver.value.trim();
      const review = form.review.value.trim();

      if (name && driver && review) {
        const div = document.createElement('div');
        div.classList.add('review-card');
        div.innerHTML = `<strong>${name}</strong> on <strong>${driver}</strong><br><p>${review}</p>`;
        list.appendChild(div);

        form.reset();
      }
    });

    // Booking form submission to WhatsApp
    function sendToWhatsapp(event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const pickup = document.getElementById("pickup").value.trim();
      const destination = document.getElementById("destination").value.trim();
      const time = document.getElementById("time").value;
      const driverInfo = document.getElementById("driver").value.split('|');
      const phone = driverInfo[0];
      const driverName = driverInfo[1];

      const message = `🚨 *RideLink Booking Alert* 🚖\n\n` +
                      `*Driver:* ${driverName}\n` +
                      `*Customer:* ${name}\n` +
                      `*Pickup Location:* ${pickup}\n` +
                      `*Destination:* ${destination}\n` +
                      `*Time:* ${time}\n\n` +
                      `Please respond to confirm this trip.`;

      const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, '_blank', 'noopener,noreferrer');

      const confirmation = document.getElementById("confirmationMessage");
      confirmation.style.display = "block";
    }