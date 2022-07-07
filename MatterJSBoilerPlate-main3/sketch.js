
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var plane_options={
	isstatic:true
	}

	var ball_options={
        isstatic:false,
		restitution:0.3,
		friction:0,
		density:1.2


	}

	ball = Bodies.circle(100,10,20,ball_options);
	World.add(world,ball);

	plane = Bodies.rectangle(500,680,1000,20,plane_options)

	//Create the Bodies Here.
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



