let container = document.querySelector('.container');
container.style.display = "grid";
let numberOfBoxesInContainer;



function resetSketchPad() {
    let box = document.getElementsByClassName('box');
    while (box.length > 0) box[0].remove();
}

function drawSketchPadWithSize(n) {
    resetSketchPad();
    let scale = "";
    numberOfBoxesInContainer = Math.pow(n, 2);
    for (let i = 0; i < n; i++) {
        scale += "auto "
    }
    container.style.grid = scale + "/" + scale;

    for (let i = 0; i < numberOfBoxesInContainer; i++) {

        const div = document.createElement('div')
        div.style.border = 'solid';
        div.style.borderColor = 'black';
        div.style.borderWidth = 'thin'
        div.setAttribute('class', 'box');
        div.addEventListener("mouseover", paint);
        container.appendChild(div);

    }

}

function paint(e) {
    const color = document.getElementById('select-color').value;
    e.target.style.backgroundColor = color;

}




const button10x10 = document.querySelector('#ten-ten');
button10x10.addEventListener('click', () => { drawSketchPadWithSize(10) });
const button30x30 = document.querySelector('#thirty-thirty');
button30x30.addEventListener('click', () => { drawSketchPadWithSize(30) });
const reset = document.querySelector('#reset-button');
reset.addEventListener('click', () => { resetSketchPad() });
const changeSize = document.querySelector('#change-size-button');
changeSize.addEventListener('click', () => {
    let size = prompt("Please enter a size!", "(10 etc.)");
    drawSketchPadWithSize(size);
});

drawSketchPadWithSize(5);