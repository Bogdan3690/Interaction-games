const input = document.querySelectorAll('.js-biggest-number');
const text = document.querySelector('.js-biggest-number-text');

input.forEach(element =>{
    element.addEventListener('input', ()=>{
        let a = Number(input[0].value);
        let b = Number(input[1].value);
        let c = Number(input[2].value);
        let biggest = a;
        if(b > biggest){
            biggest = b;
        }
        if(c > biggest){
            biggest = c;
        }
        text.textContent = `Найбільше число, яке ви ввели - ${biggest}`;
    });
});

// function onInput(ev){
//     ev.preventDefault()
//     let value = ev.target.value
//     console.log(value);
//     const numberValue = Number.parseInt(value)
//     if (Number.isNaN(numberValue)) {
//         text.textContent = 'Введіть число!'
//         text.style.color = 'red'
//         return
//     }
    
//     // let biggestNumber = Math.max(numberValue)
//     form.reset()
// }