const form = document.querySelector('.js-guess-number-form')
const text = document.querySelector('.js-guess-number')
console.log(form);

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()
    // console.log(event.target.elements.numberInput.value);
    const form = event.target
    const value = form.elements.numberInput.value
    const numberValue = Number.parseInt(value)
    if (Number.isNaN(numberValue)) {
        text.textContent = 'Введіть число!'
        text.style.color = 'red'
        return
    }
    if (numberValue > 10 || numberValue < 0) {
        text.textContent = 'Введіть число від 0 до 10!'
        text.style.color = 'red'
        return
    }
    let randomNumber = Math.round(Math.random() * (10 - 1) + 1)
    // console.log(Math.round(Math.random() * (10 - 1) + 1));
    console.log(randomNumber, numberValue);

    
    if (randomNumber === numberValue) {
        text.textContent = `Вітаю, ви вгадали число! ${numberValue}`
        text.style.color = 'green'
    }else{ 
        text.textContent = `Ви програли, комп’ютер загадав ${numberValue}`
        text.style.color = 'red'
    }
    form.reset()
}