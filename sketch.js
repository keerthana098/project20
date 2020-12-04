var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  car = createSprite(50,200,50,50);
  car.shapeColor = "red";

  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "blue";

  speed = 10;
  weight = random(400,1500);
}

function draw() {
  background('black');  

  car.velocityX = speed;

  if(car.isTouching(wall)){
    car.shapeColor = "green";


  }
  drawSprites();
}