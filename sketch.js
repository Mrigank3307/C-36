var trajectory = [] , position = [] ,  index = 0 , zero = 0 , one = 1 , posX , posY , paint , white

function setup() {
  createCanvas(800,400);
  database = firebase.database();

  


}

function draw() {
  background(255,255,255);  

  updatePosition();
  //console.log (position);

  getX();
  getY();

 // array();
  
drawThings(); 

  drawSprites();
}

function updatePosition () {
  var posIndex = "/";
  database.ref (posIndex).set({
    position:position
  })
}

function getX () {
  updateIndex();

  var gameStateRef  = database.ref('position/'+ index + '/' + zero);
  gameStateRef.on("value",function(data){
     X = data.val();
    console.log (X)
  })
}

function getY () {
  updateIndex();

  var gameStateRex  = database.ref('position/'+ index + '/' + one);
  gameStateRex.on("value",function(data){
     posY = data.val();
  //  console.log (y)
  })
}



function updateIndex() {
index = index + 1
}

function mouseDragged () {
  paint = createSprite (mouseX,mouseY,10,10);
paint.shapeColor = "blue";

if (keyDown("G")) {
   paint = createSprite (mouseX,mouseY,10,10);
  paint.shapeColor="green";
}

if (keyDown("O")) {
   paint = createSprite (mouseX,mouseY,10,10);
  paint.shapeColor="orange";
}

if (keyDown("R")) {
  paint = createSprite (mouseX,mouseY,10,10);
  paint.shapeColor="red";
}

if (keyDown("Y")) {
   paint = createSprite (mouseX,mouseY,10,10);
  paint.shapeColor="yellow";
}

if (keyDown("W")) {
 white = createSprite (mouseX,mouseY,50,50);
 white.shapeColor = "white";
}

function array () {
  trajectory = [paint.x, paint.y]
position.push(trajectory);
}

}



function drawThings () {
 paint = createSprite (X,posY,10,10);
  paint.shapeColor = "blue"
}