let array = [];


function setup() {
  createCanvas(600, 600);
  background(255);
  strokeWeight(5);
  noFill();
}

function draw() {
  if (mouseIsPressed){
    stroke(map(mouseX, 0, 600, 0, 255, true));
    //line(mouseX, mouseY, pmouseX, pmouseY);
    background(0);
    array.push([mouseX, mouseY]);
  }


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
