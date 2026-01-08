const preButton = document.querySelector('.pre-btn')
const nextButton = document.querySelector('.next-btn')
const slides = document.querySelectorAll('.image')

let currentSlide = 0

preButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length
    console.log(currentSlide);
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slides[currentSlide].classList.add('active')
    
})



nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length
    console.log(currentSlide);
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slides[currentSlide].classList.add('active')
})