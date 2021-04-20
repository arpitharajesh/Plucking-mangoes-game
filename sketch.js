const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;
var world,boy, mango10, mango11;

var gameState = "onSling";

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj = new Stone(200, 400, 30)

	mango1=new mango(1100,100,30);
	mango2=new mango(1000,200, 30);
	mango3=new mango(1160,200, 30);
	mango4=new mango(1185,110, 30);
	mango5=new mango(1220,230, 30);
	mango6=new mango(1000,100, 30);
	mango7=new mango(1100,300, 30);
	mango8=new mango(1090,190, 30);
	mango9=new mango(900,200, 30);
	mango10=new mango(950,250, 30);
	mango11 = new mango(1100, 30, 30);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject = new launcher(stoneObj.body,{x:240, y:420});

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  text("Press space for a second chance!", 200, 200)
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  launcherObject.display(); 
  stoneObj.display();

  groundObject.display();

 

 detectCollision(stoneObj, mango1);
 detectCollision(stoneObj, mango2);
 detectCollision(stoneObj, mango3);
 detectCollision(stoneObj, mango4);
 detectCollision(stoneObj, mango5);
 detectCollision(stoneObj, mango6);
 detectCollision(stoneObj, mango7);
 detectCollision(stoneObj, mango8);
 detectCollision(stoneObj, mango9);
 detectCollision(stoneObj, mango10);
 detectCollision(stoneObj, mango11);
 

}

function mouseDragged(){
	console.log("dragged ");
	Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	console.log("released");
	//Matter.Body.setStatic(stoneObj.body, false);
	launcherObject.fly();
	
	
}

function keyPressed(){
    if(keyCode === 32){
       console.log("key pressed");
        Matter.Body.setPosition(stoneObj.body, {x: 241, y:200});
		
       launcherObject.attach(stoneObj.body);

    }
}

function detectCollision(lstone,lmango){
	  mangoBodyPosition = lmango.body.position;
	 stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<= lmango.r + lstone.r){
		Matter.Body.setStatic(lmango.body, false);

	}

}

