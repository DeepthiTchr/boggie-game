const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world
var backgroundImg,platform;
var trainSound, collideSound;
var boggie1, boggie2, boggie3, boggie4, boggie5, boggie6;
var chain1, chain2, chain3, chain4, chain5;
var rock
var flag

function preload() {
    backgroundImg = loadImage("images/bg.jpg")
    trainSound = loadSound("sound/train.mp3")
    collideSound = loadSound("sound/train_crossing.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    boggie1 = new Boggie(50, 170)
    boggie2 = new Boggie(150, 170)
    boggie3 = new Boggie(250, 170)
    boggie4 = new Boggie(350,170)
    boggie5 = new Boggie(450,170)
    boggie6 = new Boggie(550,170)

//     chain1 = new Chain(boggie1.body, boggie2.body)
//     chain2 = new Chain(boggie2.body, boggie3.body)
//     chain3 = new Chain(boggie3.body, boggie4.body)
//     chain4 = new Chain(boggie4.body, boggie5.body)
//     chain5 = new Chain(boggie5.body, boggie6.body)

    rock = new Rock(1100,200)
    

    

    
    
}

function draw(){
        background(backgroundImg);
    

       
    Engine.update(engine);
      
    ground.display()
    boggie1.display()
    boggie2.display()
    boggie3.display()
    boggie4.display()
    boggie5.display()
    boggie6.display()
//     chain1.display()
//     chain2.display()
//     chain3.display()
//     chain4.display()
//     chain5.display()
    rock.display()









  var collision = Matter.SAT.collides(boggie6.body,rock.body)
  if(collision.collided){
      flag = 1;
  }
  if(flag === 1){
      collideSound.play()
textSize(30)
fill('blue')
    text("CRASH", 500,200)
  }

}


function keyPressed(){
    if(keyCode === RIGHT_ARROW ){
       
       Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x, y:boggie6.body.position.y},{x:0.5,y:0});
trainSound.play()   
 }



}


