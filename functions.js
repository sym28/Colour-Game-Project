var colors = generateRandomColors(6);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var rgbDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');

rgbDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  //add colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener('click', function(){

    //grab colour of clicked squares
    var clickedColor = this.style.backgroundColor;

    //compare clicked colour to pickedColor
    if (clickedColor === pickedColor) {

      messageDisplay.textContent = 'Correct!';
      changeColors(clickedColor);

    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try again';
    }
  });
}
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

//
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
