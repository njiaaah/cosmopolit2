// OLD SCRIPT TO BUILD TOWER

// var images = [
//   'assets/img/icons/tower_on-sale.svg',
//   'assets/img/icons/tower_booked.svg',
//   'assets/img/icons/tower_out-of-stock.svg',
//   'assets/img/icons/tower_3e.svg',
//   'assets/img/icons/tower_3e.svg',
//   'assets/img/icons/tower_1e.svg',
//   'assets/img/icons/tower_sold.svg',
//   'assets/img/icons/tower_sold.svg',
//   'assets/img/icons/tower_sold.svg',

// ];


// function getRandomImageUrl() {
//     var rand = Math.random();
//     if (rand < 0.8) {
//         return images[images.length - 1];
//     } else {
//         return images[Math.floor(Math.random() * (images.length - 1))];
//     }
// }

// let towerHeight = 34
// let towerWidth = 14

// function createTable() {
//     $('.tower-plan-view__tower').each(function() {
//         var table = $('<table>').addClass('tower-plan-view__table');
//         for (var i = 0; i < towerHeight; i++) {
//             var row = $('<tr>');
//             var floorCell = $('<td>').addClass('tower-plan-view__table__cell_floor').text(towerHeight - i);
//             row.append(floorCell);
//             for (var j = 0; j < towerWidth; j++) {
//                 // placing random image in a cell
//                 var imageUrl = getRandomImageUrl();
//                 var cell = $('<td>').addClass('tower-plan-view__table__cell').append($('<img>').attr('src', imageUrl));
//                 row.append(cell);
//             }
//             table.append(row);
//         }
//         $(this).append(table);
//     });
// }

// createTable();



// NEW TOWER 

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