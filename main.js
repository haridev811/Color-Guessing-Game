var boxCount = 6;
var colors = generateRandomColors(boxCount);
var boxes = document.querySelectorAll('.box');
var pickedColor = randomColor();
var rgbValue = document.querySelector('#rgbValue');
var message = document.querySelector('#status');
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyButton");
var hardBtn = document.querySelector("#hardButton");

easyBtn.addEventListener("click",function(){
    boxCount = 3;
    colors = generateRandomColors(boxCount);
    pickedColor = randomColor();
    rgbValue.textContent = pickedColor;
    for(var i=0;i<boxes.length;i++){
        if(colors[i]){
            boxes[i].style.background = colors[i];
        }
        else{
            boxes[i].style.display = 'none';
        }
    }
});

hardBtn.addEventListener("click",function(){
    boxCount = 6;
    colors = generateRandomColors(boxCount);
    pickedColor = randomColor();
    rgbValue.textContent = pickedColor;
    for(var i=0;i<boxes.length;i++){
        boxes[i].style.background = colors[i];
        boxes[i].style.display = "block";
    }
});

resetButton.addEventListener("click",function(){
    colors = generateRandomColors(boxCount);
    pickedColor = randomColor();
    rgbValue.textContent = pickedColor;
    message.textContent = '';
    this.textContent = 'New Colors';
    for(var i=0;i<boxes.length;i++){
        boxes[i].style.background = colors[i];
    }
    h1.style.background = 'gray';
});

function randomColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(genColor) {
    var arr = []
    for (var i = 0; i < genColor; i++) {
        arr.push(randomCol())
    }
    return arr;
}

function randomCol() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

for (var i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = colors[i];
    boxes[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        // console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            message.textContent = "YOU WON!!";
            resetButton.textContent = "Play Again";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else {
            this.style.backgroundColor = "black";
            message.textContent = "Try Again";
        }
    });
}

function changeColors(clrs) {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = clrs;
    }
}