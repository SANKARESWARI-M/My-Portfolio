
    function showTab(tabId, event) {
      document.querySelectorAll('.about-container').forEach(tab => tab.style.display = "none")
      document.getElementById(tabId).style.display = 'block';
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');
    }

    
  function filterSkills(category, event) {
    // Remove 'active' from all buttons
    document.querySelectorAll('.skill-tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const items = document.querySelectorAll('.skill-icon-item');

    items.forEach(item => {
      if (category === 'all') {
        item.style.display = 'flex';
      } else {
        item.style.display = item.classList.contains(category) ? 'flex' : 'none';
      }
    });
  }
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.projectSwiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 }
      }
    });
  });

