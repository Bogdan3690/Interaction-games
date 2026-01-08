const openBtn = document.querySelector(['button[data-action="open-modal"'])
const closeBtn = document.querySelector(['button[data-action="close-modal"'])
const jsBackdrop = document.querySelector('.js-backdrop')
const text = document.querySelector('.sub-text')
const form = document.querySelector('.subscribe-form')

closeBtn.addEventListener('click', onCloseBtnClick)
jsBackdrop.addEventListener('click', onBackDropClick)

form.addEventListener('submit', onSubmit)

function onSubmit(event){ 
    event.preventDefault()
    const form = event.target
    const value = form.elements.emailInput.value
    console.log(value);
    if (value === '') {
        text.textContent = 'Введіть email'
        text.style.color = 'red'
        text.style.fontSize = '20px'
        return
    }
    document.body.classList.add('show-modal')
    document.addEventListener('keydown', onEsc)
}

function onCloseBtnClick(){
    onCloseModal()
}

function onBackDropClick(even){
    if (even.target === even.currentTarget) {
        onCloseModal()
    }
    console.log(even.target);
    console.log(even.currentTarget);
}

function onCloseModal(){
    document.removeEventListener('keydown', onEsc)
    document.body.classList.remove('show-modal')
}

// console.log(openBtn.dataset);
// console.log(openBtn.dataset.action);
// openBtn.style.color=openBtn.dataset.color

function onEsc(event){
    console.log(event.code);
    if (event.code === 'Escape') {
        onCloseModal()
    }
}

