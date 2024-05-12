var images = [
  'assets/img/icons/tower_on-sale.svg',
  'assets/img/icons/tower_booked.svg',
  'assets/img/icons/tower_out-of-stock.svg',
  'assets/img/icons/tower_3e.svg',
  'assets/img/icons/tower_3e.svg',
  'assets/img/icons/tower_1e.svg',
  'assets/img/icons/tower_sold.svg',
  'assets/img/icons/tower_sold.svg',
  'assets/img/icons/tower_sold.svg',

];


function getRandomImageUrl() {
    var rand = Math.random();
    if (rand < 0.8) {
        return images[images.length - 1];
    } else {
        return images[Math.floor(Math.random() * (images.length - 1))];
    }
}

let towerHeight = 34
let towerWidth = 14

function createTable() {
    $('.tower-plan-view__tower').each(function() {
        var table = $('<table>').addClass('tower-plan-view__table');
        for (var i = 0; i < towerHeight; i++) {
            var row = $('<tr>');
            var floorCell = $('<td>').addClass('tower-plan-view__table__cell_floor').text(towerHeight - i);
            row.append(floorCell);
            for (var j = 0; j < towerWidth; j++) {
                // placing random image in a cell
                var imageUrl = getRandomImageUrl();
                var cell = $('<td>').addClass('tower-plan-view__table__cell').append($('<img>').attr('src', imageUrl));
                row.append(cell);
            }
            table.append(row);
        }
        $(this).append(table);
    });
}

createTable();

// change view on first appartment click

let cells = document.querySelectorAll('.tower-plan-view__table__cell')
let isAppartSelectedChb = document.querySelector('#tower-plan-view__is-appartment-selected_checkbox')
console.log(isAppartSelectedChb)

cells.forEach(cell => {
    cell.addEventListener('click', ()=>{
            if(!isAppartSelectedChb.checked) {
                isAppartSelectedChb.click()
            }
    });

})
