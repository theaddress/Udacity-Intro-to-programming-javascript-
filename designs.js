// Select color input

const Color = document.getElementById("colorPicker");



// Select size input
const gheight = document.getElementById('inputHeight');
const gwidth = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
document.addEventListener('submit', function(){
  event.preventDefault();
  const height = gheight.value;
  const width = gwidth.value;
  // const color = Color.value;
  const pixelCanvas = document.getElementById('pixelCanvas');
  pixelCanvas.innerHTML = "";
   makeGrid(height, width);
});
// When size is submitted by the user, call makeGrid()
let toggle =false;

 function makeGrid(height, width) {
   for (i = 1; i <= width; ++i) {
        let row = document.createElement('tr');
        for (j = 1; j <= height; ++j) {
            let cell = document.createElement('td');
            row.appendChild(cell);
            cell.addEventListener('click', function(){
              if(toggle){cell.style.backgroundColor = Color.value
              }
              else{
                cell.style.backgroundColor = 'white'
              } toggle = !toggle
            },false)

        };
        pixelCanvas.appendChild(row);
    };
};
//
// // Your code goes here!
// for (var x=0; x<= hight; x++){
//
// }
// }
