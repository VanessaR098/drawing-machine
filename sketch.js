let array = []; //holds old X and Y mouse positions
let colorR = 0;
let colorG = 0;
let colorB = 0;
let cnv;

function setup() {
  cnv = createCanvas(windowWidth/2, windowHeight/2);
  cnv.parent("#canvasDiv");
  background(255);
  strokeWeight(5);
  noFill();
}

// function preload(){
//
//
// }

function draw() {

  if (mouseIsPressed){
    stroke(colorR, colorG, colorB);//map(mouseX, 0, 600, 0, 255, true));
    line(mouseX, mouseY, pmouseX, pmouseY); //pmouseX/Y = contains position of mouser or finger in the frame previous to the current frame, relative to (0,0) of the canvas
    //background(0);
    array.push([mouseX, mouseY]);
  }




}

function keyPressed(){
  if (key === 'r'){
    colorR = 255;
    colorG = 77;
    colorB = 77;
  }else if(key === 'g'){
    colorR = 0;
    colorG = 255;
    colorB = 0;
  }else if(key === 'b'){
    colorR = 77;
    colorG = 136;
    colorB = 255;
  }else if(key === 'y'){
    colorR = 255;
    colorG = 255;
    colorB = 102;
  }else if(key === 'o'){
    colorR = 255;
    colorG = 148;
    colorB = 77;
  }else if(key === 'k'){
    colorR = 0;
    colorG = 0;
    colorB = 0;
  }
  return false;

}


function keyTyped(){
  if (key === 's'){
    //save canvas as an image
    saveCanvas('fileName', 'png');
  }else if (key === 'd'){
    background(255);

    //display drawn image
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();


  }



  return false;
}
