const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var Paper;
var Dustbin1;
var Dustbin2;
var Dustbin3;
var Ground;

function setup(){
	createCanvas(1600,400);
	engine = Engine.create();
	world = engine.world;
	
	Paper = new Paper(170,height/2,85,85);
	Dustbin1 = new Dustbin(1300,height/2-25,25,100);
	Dustbin2 = new Dustbin(1400,height/2,200,25);
	Dustbin3 = new Dustbin(1500,height/2-25,25,100);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  KeyPressed()
  Paper.display();
  Dustbin1.display();
  Dustbin2.display();
  Dustbin3.display();

  drawSprites();
}

function KeyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(Paper.body,PaperObject.bodyy.position,{x:85,y:85})
	}
}