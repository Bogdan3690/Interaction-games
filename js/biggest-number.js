const input = document.querySelectorAll('.js-biggest-number')
const text = document.querySelector('.js-biggest-number-text')
console.log(input);

input.addEventListener('input', onInput)

function onInput(ev){
    ev.preventDefault()
    let value = ev.target.value
    console.log(value);
    const numberValue = Number.parseInt(value)
    if (Number.isNaN(numberValue)) {
        text.textContent = 'Введіть число!'
        text.style.color = 'red'
        return
    }
    
    // let biggestNumber = Math.max(numberValue)
    form.reset()
}