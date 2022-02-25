const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies; 
const Constraint=Matter.Constraint;
var bola, chao, launcher, goalkepper;
var score = 0;
var gameState = 'inicio';


function setup() {
  createCanvas(1350, 800);
  engine = Engine.create();
  world = engine.world;
  bola = new Ball(400, 400, 30);
  chao = new Ground(670, 795, 1350, 45)
  launcher = new Launcher(bola.body, {x: 400, y: 400})
  goalkepper= new Gk(1250, 550, 20, 400)

}
 
function draw() {
  background("green");
  Engine.update(engine);

  textSize(55)
  text("Gols: "+ score, 600, 50);

  bola.display();
  chao.display();
  launcher.display();
  goalkepper.display();

  if(bola.body.position.x > 1300){
    score = score + 1;
    Matter.Body.setPosition(bola.body, {x: 400, y: 400});
    launcher.attach(bola.body);
    gameState  = 'inicio'
  }

}


function mouseDragged(){
  if(gameState === 'inicio'){
  Matter.Body.setPosition(bola.body, {x: mouseX, y: mouseY})
  }
}

function mouseReleased(){
  launcher.fly();
  gameState = 'fly'
}
