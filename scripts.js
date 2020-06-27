const toogleBtn = document.querySelector(".navar_toogleBtn");
const manusBar = document.querySelector(".navbar_manus");
const iconsBar = document.querySelector(".navbar_icons");
let toogleBtnClicked = false;

function init() {
    toogleBtn.addEventListener("click",toogleBtnClick);
}

init();

function toogleBtnClick() {
    if(!toogleBtnClicked) {
        manusBar.classList.remove("navar_toogleBtn_click");
        iconsBar.classList.remove("navar_toogleBtn_click");
        toogleBtnClicked = true
    } else {
        manusBar.classList.add("navar_toogleBtn_click");
        iconsBar.classList.add("navar_toogleBtn_click");
        toogleBtnClicked = false
    }
}