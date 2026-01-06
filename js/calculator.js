
const firstInput = document.querySelector('.js-first-calculator-number')
const secondInput = document.querySelector('.js-second-calculator-number')
const plus = document.querySelector('.js-plus')
const minus = document.querySelector('.js-minus')
const division = document.querySelector('.js-division')
const multiplication = document.querySelector('.js-multiplication')
const equals = document.querySelector('.js-equals')
const text = document.querySelector('.js-result')

    let option = '+'

equals.addEventListener('click', onClickEquals)

function onClickEquals(){
    let number1 = Number.parseInt(firstInput.value)
    let number2 = Number.parseInt(secondInput.value)
     if (Number.isNaN(number1) || Number.isNaN(number2)) {
        text.textContent = 'Введіть число!'
        text.style.color = 'red'
        return
    }
        text.style.color = 'grey'
switch(option){
    case "+":
        text.textContent = number1 + number2
        break
    case "-":
        text.textContent = number1 - number2
        break
    case "*":
        text.textContent = number1 * number2
        break
    case "/":
        text.textContent = number1 / number2
        break
        default:
        text.textContent = `Not working`
        text.style.color = 'red'
}
}

plus.addEventListener('click', () => {
    option = '+'
})

minus.addEventListener('click', () => {
    option = '-'
})

multiplication.addEventListener('click', () => {
    option = '*'
})

division.addEventListener('click', () => {
    option = '/'
})
