const openBtn = document.querySelector(['button[data-action="open-modal"'])
const closeBtn = document.querySelector(['button[data-action="close-modal"'])
const jsBackdrop = document.querySelector('.js-backdrop')
console.log(closeBtn);

openBtn.addEventListener('click', onOpenBtnClick)
closeBtn.addEventListener('click', onCloseBtnClick)
jsBackdrop.addEventListener('click', onBackDropClick)

function onOpenBtnClick(){
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