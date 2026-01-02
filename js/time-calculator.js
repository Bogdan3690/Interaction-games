const form = document.querySelector('.js-time-calculator-form')
const text = document.querySelector('.js-time-calculator-text')
console.log(form);

form.addEventListener('submit', onSubmit)

function onSubmit(ev){
    ev.preventDefault()
    const form = ev.target
    const value = form.elements.timeInput.value
    const timeValue = Number.parseInt(value)
    if (Number.isNaN(timeValue)) {
        text.textContent = 'Введіть число!'
        text.style.color = 'red'
        return
    }
    const days = String(Math.floor(timeValue / (24*3600))).padStart(2, '0')

    const restOfDays = timeValue % (24*3600)

    const hours = String(Math.floor(restOfDays / 3600)).padStart(2, '0')
    const restOfHours = timeValue % 3600

    const minutes = String(Math.floor(restOfHours / 60)).padStart(2, '0')

    const seconds = String(Math.floor(restOfHours % 60)).padStart(2, '0')

    // 60 sec in 1 min
    // 3600 sec in 1 hour
    // 86400 in 1 day
    text.textContent = `${days} дн. ${hours}:${minutes}:${seconds}`
    form.reset()
}