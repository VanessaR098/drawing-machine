let array = [];
let colorR = 0;
let colorG = 0;
let colorB = 0;

function setup() {
  createCanvas(600, 600);
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
    line(mouseX, mouseY, pmouseX, pmouseY);
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
  }else if(key === 'k'){
    colorR = 0;
    colorG = 0;
    colorB = 0;
  }
  return false;

}


function keyTyped(){
  if (key === 's'){
    //save this image
    saveCanvas('fileName', 'png');
  }else if (key === 'd'){
    background(255);

    //display image
    beginShape();
    for (let i = 0; i < array.length-1; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();


  }



  return false;
}
