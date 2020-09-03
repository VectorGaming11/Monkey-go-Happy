var b,bI;
var p,p_running;

function preload(){
bI = loadImage("jungle.jpg");
p_running = loadAnimation("Monkey_01.png,Monkey_02.png,Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png"); 
}

function setup() {
  createCanvas(800,400);
  b= createSprite(400,200,800,400);
  b.addImage(bI);
  
  p = createSprite(360,200);
 p.addAnimation("Running",p_running);

}

function draw() {
background("white");
drawSprites();  
}