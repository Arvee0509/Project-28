
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var ground;
var boy;
var stone1;
var mango1,mango2,mango3,mango4,mango5;

function preload(){
tree=createSprite(400,350,50,100);
ground=createSprite(150,350,10,800);
boy=createSprite(200,350,50,30);
stone1=new Stone(120,200,50,10);
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



