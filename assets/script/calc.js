// all programms dropdown

const allProgrammsBtn = document.querySelector('.calc-button-programms')
const programmsList = document.querySelectorAll('.program-name')

let degrees = 0

$('.calc-button-programms').on('click', ()=>{
    $('#calc-programms-drop-down').slideToggle(250)
    $('#calc-all-programms-arrow').toggleClass('rotated')
})

for (let i = 0; i < programmsList.length; i++) {
    programmsList[i].addEventListener('click', (e)=>{
        allProgrammsBtn.innerHTML = programmsList[i].innerHTML + '<img id="calc-all-programms-arrow" src="assets/img/icons/calc_arrow.svg" alt="">'
        $('#calc-programms-drop-down').slideToggle(250)
        $('#calc-all-programms-arrow').toggleClass('rotated')
        
      })
    
}

// sort

$('.calc-sort-label').on('click', ()=>{
    toggleSort()
})

$('.calc-img-sort-img').on('click', ()=>{
    toggleSort()
})

$('.calc-sort-list-item').on('click', (evt)=>{
    toggleSort()
    document.querySelector('#calc-sort-label').innerHTML = evt.target.innerHTML
})

function toggleSort() {
    $('.calc-sort-list').slideToggle(250)
    $('.calc-img-sort-img').toggleClass('rotated')
}
