// Select color input
var color = document.getElementById('colorPicker');
// Select size input
var size = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
var canvas = document.getElementById('pixelCanvas');
function clear(){
  canvas.innerHTML = "";
}

function makeGrid() {
  clear()
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  for (var h = 0; h < height; h++){
    var row = document.createElement('tr');
    canvas.appendChild(row);
    for (var w = 0; w < width; w++){
      var col = document.createElement('td');
      canvas.appendChild(col);
    }
  }
}


size.addEventListener('submit', function(event){
  event.preventDefault();
  makeGrid();
});
