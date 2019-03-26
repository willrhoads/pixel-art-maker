// Select color input
var color = document.getElementById('colorPicker');
// Select size input
var height = document.getElementById('inputHeight');
var width = document.getElementById('inputWidth');
// When size is submitted by the user, call makeGrid()
function makeGrid() {
  var canvas = document.getElementById('pixelCanvas');
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  for (var h = 0; h < height; h++){
    var row = document.createElement('tr');
    canvas.appendChild(row);
    for (var w = 0; w < width; w++){
      var col = document.createElement('td');
      canvas.appendChild(column);
    }
  }
}
