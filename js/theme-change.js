const themeBtn = document.querySelector(".switch-theme-btn");
const whiteThemeImg = themeBtn.querySelector(".img-white-theme")
const blackThemeImg = themeBtn.querySelector(".img-black-theme")
// console.log(blackThemeImg);

themeBtn.addEventListener('click', onToogleBtnClick)

let darkTheme = false

function onToogleBtnClick(ev){
    darkTheme = !darkTheme
    // console.log(darkTheme);
    if (darkTheme === true) {
        blackThemeImg.classList.remove('hidden')
        whiteThemeImg.classList.add('hidden')
        document.documentElement.style.setProperty('--text-color', '#ffffff9e')
        document.documentElement.style.setProperty('--main-bg-color', '#000000ba')
    }else{
        whiteThemeImg.classList.remove('hidden')
        blackThemeImg.classList.add('hidden')
        document.documentElement.style.setProperty('--text-color', 'black')
        document.documentElement.style.setProperty('--main-bg-color', 'white')
    }
}