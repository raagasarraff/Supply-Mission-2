var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var line1, line2, line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	line1=new Rectangle(400,600,250,10);
	line2=new Rectangle(300,600,10,80);
	line3=new Rectangle(500,600,10,80);
	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  line1.display();
  line2.display();
  line3.display();

  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  //rect(line1.position.x, line1.position.y, 20,100);
  //rect(line2.position.x, line2.posiiton.y, 20,100)

  
  
   keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
    Matter.Body.setStatic(packageBody, false)
  }
}



