var ground
var box1,box2,box3
var paper
var paperbody,paperObject;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700)
	rectMode(CENTER);
//	groundSprite=createSprite(width/2, 680, width,10);
//	groundSprite.shapeColor=color("yellow")

	engine = Engine.create();
	world = engine.world;

    box1= new Box (510,600,20,120)
    box2= new Box (565,630,130,20) 
    box3= new Box (620,600,20,120)
	paperObject= new Paper (100,610,15)
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 680, width, 20 , {isStatic:true} );
	 World.add(world, ground);
	//paperObject= Bodies.circle(300,640,10);
	//World.add(world, paperObject);
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();
  box2.display()
  paperObject.display()
  rect(ground.position.x,ground.position.y,width,20)
 //ellipseMode(RADIUS)
// ellipse(paperObject.body.position.x, paperObject.body.position.y,10,10);
}
function keyPressed() {
   if (keyCode===RIGHT_ARROW) {
     Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:26,y:-40})	
     console.log("hello")
	 }
	}