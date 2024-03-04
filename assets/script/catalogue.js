const cardViewToggle = document.querySelector('#header-sticky__view-toggle')
const contentToggles = $('.card__toggle-icon')
const cardContent = $('.card__content')

// toggling card view

if(cardViewToggle) {
    cardViewToggle.addEventListener('change', function(event) {
        if (event.target.checked && $(window).width() < 600) {
            $('.card__content').slideUp(250)
        } else {
            $('.card__content').slideDown(250)
        }
    });
}



contentToggles.each(function(index){
    $(this).click(function(){
        $(this).toggleClass('flip')
        cardContent.eq(index).slideToggle(250)
    })
})




// sliders

if(document.querySelector('#slider1')) {
    initializeSlider({ minValue: 20, maxValue: 150, minStartingValue: 20, maxStartingValue: 150, stepValue: 1 }, 'slider1', 'min-value1', 'max-value1');
    initializeSlider({ minValue: 2, maxValue: 36, minStartingValue: 2, maxStartingValue: 36, stepValue: 1 }, 'slider2', 'min-value2', 'max-value2');
    initializeSlider({ minValue: 5, maxValue: 50, minStartingValue: 5, maxStartingValue: 50, stepValue: 1 }, 'slider3', 'min-value3', 'max-value3');
    
}


// 

$('.catalogue-filter__sort-list-item').click(function(){
    var newText = $(this).find('.catalogue-filter__sort-list-item__text').text();
    $('.sort-label__text').text(newText);
    setTimeout(function() {
        $('#catalogue-filter__sort-checkbox').prop('checked', false);
        $('#catalogue-result__sort-checkbox').prop('checked', false);
        $('html').css('overflow', 'auto');
    }, 200);
});

