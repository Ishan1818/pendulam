
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var b1, b2, b3, b4, b5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	b1 = new bob(300, 100, 5)
	b2 = new bob(305, 100, 5)
	b3 = new bob(310, 100, 5)
	b4 = new bob(315, 100, 5)
	b5 = new bob(320, 100, 5)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

}



