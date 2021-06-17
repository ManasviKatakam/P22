var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png")
	fairyVoice = loadsound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);

	//fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("flyingfairy",fairyImg);
	fairy.scale = 0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  fairy.debug=true;
  fairy.setCollider("rectangle",500,0,50,100)

  console.log(star.y);

  if (star.isTouching(fairy)) {
	Matter.Body.setStatic(starBody,true); 
  }

  drawSprites();
}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x+20;
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x-20;
	}

	if (keyCode === DOWN_ARROW && starBody.position.x === 650 && starBody.position.y === 30 && star.x === 650 && star.y === 30) {
		Matter.Body.setStatic(starBody,false); 
	}	
}
