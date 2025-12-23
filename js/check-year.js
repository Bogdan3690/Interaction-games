const form = document.querySelector('.js-check-year-form')
const text = document.querySelector('.js-check-year-text')

form.addEventListener('submit', onSubmit)

function onSubmit(event){
    event.preventDefault()
    console.log(event.target.elements.yearInput.value);
    const form = event.target
    const value = form.elements.yearInput.value
    console.log(typeof value);
    const yearValue = Number.parseInt(value)
    if (Number.isNaN(yearValue)) {
        text.textContent = 'Введіть число!'
        text.style.color = 'red'
        return
    }
    if (yearValue % 4 === 0) {
        text.textContent = 'Ви народилися у високосний рік!'
        text.style.color = 'green'
    // }else if (){
    //     // check for 100
    // }else if (){
        // check for 400
    }else{
        text.textContent = 'Ви народилися не у високосний рік!'
        text.style.color = 'red'
    }
    form.reset()
}
