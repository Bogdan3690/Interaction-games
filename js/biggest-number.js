const inputs = document.querySelectorAll('.js-biggest-number');
const text = document.querySelector('.js-biggest-number-text');
const result = text.querySelector('.js-result');
console.log(result);


inputs.forEach(element =>(element.addEventListener('input', onInput)))

function onInput(ev){
        let a = Number(inputs[0].value);
        let b = Number(inputs[1].value);
        let c = Number(inputs[2].value);
    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)){
        text.textContent = 'Введіть число!'
        text.style.color = 'red'
        return
    }


    let biggestNumber = Math.max(a, b, c)
    console.log(biggestNumber);

    result.textContent = biggestNumber
}
    