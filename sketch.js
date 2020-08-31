
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(600,680,1200,20);

paper = new Paper(100,200,100);

box1 = new Dustbin(920,570,250,250);

box2 = new Ground(790,590,20,150);

box3 = new Ground(1030,590,20,150);
Engine.run(engine);
 
}

function draw() {
  background("dustbin.png");
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  
}


function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:2000,y:-2000});
	}

}


