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


function createTable() {
    $('.tower-plan-view__tower').each(function() {
        var table = $('<table>').addClass('tower-plan-view__table');
        for (var i = 0; i < 35; i++) {
            var row = $('<tr>');
            var floorCell = $('<td>').addClass('tower-plan-view__table__cell_floor').text(36 - i);
            row.append(floorCell);
            for (var j = 0; j < 14; j++) {
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




// not important
var currentPlayer = 'cross'; 
var moves = 0; 
var gameEnded = false; 

$(document).on('click', '.tower-plan-view__table__cell', function() {
    if (gameEnded) {
        return; 
    }
    
    var $cell = $(this);

    if ($cell.hasClass('cross') || $cell.hasClass('circle')) {
        return; 
    }
    

    var imageUrl = currentPlayer === 'cross' ? 'assets/img/icons/tower_cross.svg' : 'assets/img/icons/tower_circle.svg';
    $cell.empty().append($('<img>').attr('src', imageUrl)).addClass(currentPlayer);
    

    if (checkWinner()) {
        gameEnded = true; 
        setTimeout(function() {
            alert(currentPlayer.toUpperCase() + ' wins!');
        }, 250); 
        return; 
    }
    
    moves++;

    if (moves === 35) {
        gameEnded = true; 
        setTimeout(function() {
            alert('draw');
        }, 250); 
        return;
    }

    currentPlayer = currentPlayer === 'cross' ? 'circle' : 'cross';
});

function checkWinner() {
    var rows = $('.tower-plan-view__table tr');
    var cols = $('.tower-plan-view__table__cell');

    for (var i = 0; i < rows.length; i++) {
        var cells = $(rows[i]).find('.tower-plan-view__table__cell');
        if (checkLine(cells)) {
            return true;
        }
    }

    for (var j = 0; j < 14; j++) {
        var cells = $(cols).filter(function(index) {
            return index % 14 === j;
        });
        if (checkLine(cells)) {
            return true;
        }
    }

    for (var k = 0; k <= rows.length - 3; k++) {
        for (var l = 0; l <= 14 - 3; l++) {
            var diagonalCells1 = [];
            var diagonalCells2 = [];
            for (var m = 0; m < 3; m++) {
                diagonalCells1.push($('.tower-plan-view__table__cell').eq((k + m) * 14 + l + m));
                diagonalCells2.push($('.tower-plan-view__table__cell').eq((k + m) * 14 + l + 2 - m));
            }
            if (checkLine(diagonalCells1) || checkLine(diagonalCells2)) {
                return true;
            }
        }
    }

    return false;
}

function checkLine(cells) {
    var classes = [];
    

    cells = Array.from(cells);

    for (var i = 0; i < cells.length; i++) {
        var cell = cells[i];
        var className = $(cell).hasClass('cross') ? 'cross' : $(cell).hasClass('circle') ? 'circle' : null;
        classes.push(className);
    }


    for (var j = 0; j <= classes.length - 3; j++) {
        if (classes[j] && classes[j] === classes[j + 1] && classes[j] === classes[j + 2]) {
            return true;
        }
    }
    return false;
}
