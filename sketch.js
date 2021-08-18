const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine,world;
var bg;
var snow = [];

function preload(){
  bg = loadImage("snow1.jpg");
}



function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  
}

function draw() {
  background(bg);  

  Engine.update(engine);

  if(frameCount % 5 == 0){

    snow.push(new Snow(random(0,1200),-20,30));

  }

  for(var i=0 ; i<snow.length ; i++){

    snow [i].display();

  }

}