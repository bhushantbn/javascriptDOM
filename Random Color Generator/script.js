console.log("script called..")

let boxes=document.querySelector('.container').children


function getRandomColor(params) {
    let valOne=Math.ceil(0 + Math.random() * 255)
    let valTwo=Math.ceil(0 + Math.random() * 255)
    let valThree=Math.ceil(0 + Math.random() * 255)
    return `rgb(${valOne}, ${valTwo}, ${valThree})`
}
Array.from(boxes).forEach(element => {
    element.style.backgroundColor=getRandomColor();
    element.style.color=getRandomColor();
})