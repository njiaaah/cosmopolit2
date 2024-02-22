initializeSlider({ minValue: 2, maxValue: 36, minStartingValue: 2, maxStartingValue: 36, stepValue: 1 }, 'slider1', 'min-value1', 'max-value1');
initializeSlider({ minValue: 10, maxValue: 50, minStartingValue: 10, maxStartingValue: 50, stepValue: 1 }, 'slider2', 'min-value2', 'max-value2');
initializeSlider({ minValue: 1, maxValue: 30, minStartingValue: 1, maxStartingValue: 30, stepValue: 1 }, 'slider3', 'min-value3', 'max-value3');

$('.dropdown-list__label').click(()=>{
    $('.dropdown-list__list').slideToggle(320)
    $('.dropdown-list__label').toggleClass('borderless-bottom')
    $('.dropdown-list__label__icon').toggleClass('flip')
})

$('.dropdown-list__item').each((index)=>{
    $('.dropdown-list__item').eq(index).click(()=>{
        $('.dropdown-list__text').eq(0).text($('.dropdown-list__item').eq(index).text())
        $('.dropdown-list__item_active').removeClass('dropdown-list__item_active')
        $('.dropdown-list__item').eq(index).addClass('dropdown-list__item_active')
        $('.dropdown-list__list').slideToggle(320)
        $('.dropdown-list__label').toggleClass('borderless-bottom')
        $('.dropdown-list__label__icon').toggleClass('flip')
    })
})



// borderless-bottom