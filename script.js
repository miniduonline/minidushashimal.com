const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links')

menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
}

const subscribeForm = document.querySelector('.subscribe-form');
const subscribeSuccessMessage = document.getElementById('subscribeSuccessMessage');

subscribeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: new FormData(subscribeForm)
        });
        
        const data = await response.json();
        
        if (data.success) {
            subscribeSuccessMessage.style.display = 'block';
            subscribeForm.reset();
        }
    } catch (error) {
        console.log(error);
    }
});

function closeSubscribeMessage() {
    subscribeSuccessMessage.style.display = 'none';
}

// script.js
document.querySelectorAll('.custom-faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const btn = question.querySelector('.custom-toggle-btn');
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      btn.textContent = '+';
    } else {
      answer.style.display = 'block';
      btn.textContent = '−';
    }
  });
});



function setupLoadMoreProjects() {
  const projectsGrid = document.querySelector('.projects-grid');
  const projectCards = projectsGrid.querySelectorAll('.project-card');
  
  // Hide projects beyond the first 3
  projectCards.forEach((card, index) => {
      if (index >= 3) {
          card.style.display = 'none';
      }
  });

  // Create load more button
  const loadMoreBtn = document.createElement('button');
  loadMoreBtn.textContent = 'Load More Projects';
  loadMoreBtn.classList.add('load-more-btn');
  
  // Insert button after projects grid
  projectsGrid.insertAdjacentElement('afterend', loadMoreBtn);

  let visibleProjectCount = 3;

  loadMoreBtn.addEventListener('click', () => {
      // Show next 3 projects
      for (let i = visibleProjectCount; i < visibleProjectCount + 3 && i < projectCards.length; i++) {
          projectCards[i].style.display = 'block';
      }

      visibleProjectCount += 3;

      // Hide button if all projects are visible
      if (visibleProjectCount >= projectCards.length) {
          loadMoreBtn.style.display = 'none';
      }
  });
}

document.addEventListener('DOMContentLoaded', setupLoadMoreProjects);


 grecaptcha.ready(function() {
  grecaptcha.execute('6LcJKmEqAAAAAAEiVSyHALC92Z3AUUjSJyGfMbHa', {action: 'homepage'}).then(function(token) {
    // Handle the verified token
  });
});

  // Right-click disable
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  // Disable specific keyboard shortcuts (e.g., F12, Ctrl+U)
  document.addEventListener('keydown', function(e) {
    if (e.key === "F12" || (e.ctrlKey && e.key === "u")) {
      e.preventDefault();
    }
  });
