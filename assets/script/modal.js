
const modal = document.querySelector('.modal')
const modalOpener = document.querySelectorAll('.callback-modal-opener')
const modalCloseBtns = document.querySelectorAll('.modal__header__close-btn')
const modalWrapper = document.querySelector('.modal__wrapper')
const modalForm = document.querySelector(".modal__form")
const modalSubmit = document.querySelector('.modal__form__submit')
const modalSuccessPopup = document.querySelector('.modal__submit-success-popup')

const modalInputs = document.querySelectorAll('.modal__input')
const modalNameInput = document.querySelector('#modal__name-input')
const modalTelInput = document.querySelector('#modal__phone-input')

console.log(modalNameInput.value)
console.log(modalTelInput)

// open modal
modalOpener.forEach(button => {
    button.addEventListener('click', ()=>{
        event.preventDefault();
        setTimeout(()=>{       
            modal.showModal()
        },1)
    })
});

// close modal
modalCloseBtns.forEach(button => {
    button.addEventListener('click', ()=>{
        modal.close()
    })
});

// prevent form execute
function handleForm(event) { 
    event.preventDefault() 
} 
modalForm.addEventListener('submit', handleForm);

// click outside to close
document.addEventListener('click', (event) => {
        if (!modalWrapper.contains(event.target) && modal.open) {
            modal.close()
          }
});

// animation & close on submitting the data
let isDataCorrect = true

modalSubmit.addEventListener('click', ()=>{
    // check if both input not empty

    if(modalNameInput.value.trim().length == 0 || modalTelInput.value.trim().length == 0) {
        modalInputs.forEach(input => {
            if(input.value.trim().length == 0) {
                input.classList.add('modal__input-alert')
                setTimeout(()=>{
                    input.classList.remove('modal__input-alert')
                    input.value = ''
                },1000)
            }
        });
    } else if(isDataCorrect) {
        console.log('form submitted')
        modalForm.classList.add('modal__form_fadeout')
        modalSuccessPopup.classList.add('modal__submit-success-popup_fadein')
        setTimeout(()=>{
            modalForm.classList.remove('modal__form_fadeout')
            modalSuccessPopup.classList.remove('modal__submit-success-popup_fadein')
            modal.close()
        },2500)
    }

})

