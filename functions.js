var numSquares = 6;
var colors;
var pickedColor;
var squares = document.querySelectorAll('.square');
var rgbDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var resetButton = document.getElementById('click');
var modeButtons = document.querySelectorAll('.mode');
var h1 = document.querySelector('h1');

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      
      if (this.textContent === 'EASY') {
        numSquares = 3;
      } else{
        numSquares = 6;
      }
      reset();
    });
  } 
}

function setupSquares(){
  for(var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener('click', function(){
  
      //grab colour of clicked squares
      var clickedColor = this.style.backgroundColor;
  
      //compare clicked colour to pickedColor
      if (clickedColor === pickedColor) {
  
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?';
        changeColors(clickedColor);
  
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try again';
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  //pick random colour from colour array
  pickedColor = pickColor();
  //change h1 text to match picked colour RGB value
  rgbDisplay.textContent = pickedColor;
  resetButton.textContent = 'New Colours';
  messageDisplay.textContent = '';
  //change square colours
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];  
    } else{
      squares[i].style.display = 'none';
    }   
  }
  h1.style.backgroundColor = 'steelblue';
}

resetButton.addEventListener('click', function(){
  reset();
});

//sets all squares colour to pickedColor
function changeColors(color){
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = color;
    }
}
//randomly selects a number and returns value in color array
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
//adds num amount of colours to the array
function generateRandomColors(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
//generate 3 random variables from 0-255
function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
   return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
