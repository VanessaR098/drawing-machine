let array = []; //holds old X and Y mouse positions
let colorR = 0;
let colorG = 0;
let colorB = 0;
let cnv;
let button;
let backgroundColor = 200;

function setup() {
  cnv = createCanvas(800, 300);
  cnv.parent("#canvasDiv");


  background(backgroundColor);
  drawGrid();
  strokeWeight(4);
  noFill();
}

function draw() {
  if (mouseIsPressed && mouseY >= 0 && mouseX >= 0) {
    background(backgroundColor);
    backgroundColor -= 2;

    stroke(colorR, colorG, colorB); //map(mouseX, 0, 600, 0, 255, true));
    line(mouseX, mouseY, pmouseX, pmouseY); //pmouseX/Y = contains position of mouser or finger in the frame previous to the current frame, relative to (0,0) of the canvas
    array.push([mouseX, mouseY]);
  }
}

// function mousePressed() {
//   backgroundColor = 200;
// }


function keyTyped() {
  if (key === 's') {
    //save canvas as an image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    background(255);
    //display drawn image
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
    backgroundColor = 200;


  } else if (key === 'c'){
    //clear the canvas
    array = [];
    clear();
    backgroundColor = 200;


  //change color of "drawing pen"
  } else if (key === 'r') {
    colorR = 255;
    colorG = 77;
    colorB = 77;
  } else if (key === 'g') {
    colorR = 0;
    colorG = 255;
    colorB = 0;
  } else if (key === 'b') {
    colorR = 77;
    colorG = 136;
    colorB = 255;
  } else if (key === 'y') {
    colorR = 255;
    colorG = 255;
    colorB = 102;
  } else if (key === 'o') {
    colorR = 255;
    colorG = 148;
    colorB = 77;
  } else if (key === 'k') {
    colorR = 0;
    colorG = 0;
    colorB = 0;
  }
  return false;
}

function drawGrid() {
  numCells = 16;
  fillColor = 255;
  strokeWeight(0);

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
      if (fillColor === 255){
        fillColor = 200;
      }else{
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
  strokeWeight(5);
}
