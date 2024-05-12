const towerGrid = document.querySelector('.tower-plan-view__grid');
const towerArticle01 = document.querySelector('.tower-plan-view__article-01');
const towerArticle02 = document.querySelector('.tower-plan-view__article-02');

towerGrid.addEventListener('mouseover', function() {
  towerArticle01.classList.add('tower-plan-view__article-01_visible');
  towerArticle02.classList.add('tower-plan-view__article-02_visible');
});

towerGrid.addEventListener('mouseout', function() {
  towerArticle01.classList.remove('tower-plan-view__article-01_visible');
  towerArticle02.classList.remove('tower-plan-view__article-02_visible');
});


document.addEventListener('DOMContentLoaded', function() {
  const floors = document.querySelectorAll('rect[id$="_floor"]');
  const floorTextsA = document.querySelector('.tower-plan-view__floor-A');
  const floorTextsB = document.querySelector('.tower-plan-view__floor-B');

  // Function to update floor text for corresponding paragraph
  function updateFloorText(floorNumber, paragraph) {
    paragraph.textContent = floorNumber + " ЭТАЖ";
  }

  // Loop through each floor and add event listener
  floors.forEach(function(floor) {
    floor.addEventListener('mouseover', function() {
      const id = floor.getAttribute('id');
      const floorNumber = id.split('_')[1];
      const tower = id.split('_')[0];
      if (tower === 'A') {
        updateFloorText(floorNumber, floorTextsA);
      } else if (tower === 'B') {
        updateFloorText(floorNumber, floorTextsB);
      }
    });
  });
});