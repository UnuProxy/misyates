let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function moveSlide(direction) {
    slides[currentSlide].classList.remove('current');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('current');
}
// LOADING FROM JSON FILE YACHT IN CATALOG PAGE
document.addEventListener("DOMContentLoaded", function() {
  const lengthFilter = document.getElementById("lengthFilter");
  const nameSearch = document.getElementById("nameSearch");
  const yachtGrid = document.querySelector('.yacht-grid');
  let yachtData = [];
  function loadYachts() {
    yachtGrid.innerHTML = '';  
    yachtData.forEach(yacht => {
      const yachtCard = document.createElement('div');
      yachtCard.className = 'yacht-card';
      yachtCard.addEventListener('click', function() {
        window.location.href = `yacht-detail.html?id=${yacht.id}`;
      });
      const yachtImage = document.createElement('img');
      yachtImage.src = yacht.image;
      yachtImage.alt = yacht.name;
      yachtCard.appendChild(yachtImage);
      const yachtInfo = document.createElement('div');
      yachtInfo.className = 'yacht-info';
      const yachtTitle = document.createElement('h2'); 
      yachtTitle.textContent = yacht.name;
      yachtInfo.appendChild(yachtTitle);
      const specsArray = yacht.specs.split(", ").map(spec => spec.trim()); 
      specsArray.forEach(spec => {
        const specItem = document.createElement('div');
        specItem.className = 'spec-item';
        specItem.textContent = spec;
        specItem.style.color = 'white';  
        yachtInfo.appendChild(specItem);
      });
      const yachtPrice = document.createElement('div');
      yachtPrice.className = 'yacht-price';
      yachtPrice.textContent = `Price: ${yacht.price}`;
      yachtInfo.appendChild(yachtPrice);
      yachtCard.appendChild(yachtInfo);
      yachtGrid.appendChild(yachtCard);
    });
  }
  function applyFilters() {
    const lengthRange = lengthFilter.value.split("-").map(Number);
    const searchName = nameSearch.value.toLowerCase();
    const filteredYachts = yachtData.filter(yacht => {
      const yachtLength = parseInt(yacht.length, 10);
      const yachtName = yacht.name.toLowerCase();
      return ((lengthRange[0] <= yachtLength && yachtLength <= lengthRange[1]) || lengthFilter.value === "all") &&
             (!searchName || yachtName.includes(searchName));
    });
    yachtData = filteredYachts;
    loadYachts();
  }

  fetch('yachts.json')
    .then(response => response.json())
    .then(data => {
      yachtData = data;
      loadYachts();
    });
  lengthFilter.addEventListener("change", applyFilters);
  nameSearch.addEventListener("keyup", applyFilters);
});

document.getElementById('yachtsContainer').addEventListener('touchstart', function() {
  document.querySelector('.swipe-indicator').style.display = 'none';
});
var swiper = new Swiper('.swiper-container', {
  
  on: {
    slideChange: function () {
      document.querySelector('.swipe-indicator').style.display = 'none';
    }
  }
});



