const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var player,computerPlayer;
var playerBase,computerBase;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300,random(450,height-300),180,150);
  computerBase = new ComputerBase(width-300,random(450,height-300),180,150);

   //Create Player Base and Computer Base Object
   player = new Player(285,playerBase.body.position.y-153,50,180);
   computerPlayer = new ComputerPlayer(width-280,computerBase.body.position.y-153,50,180);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //display Player and computerplayer
   player.display();
   computerPlayer.display();

   //Display Playerbase and computer base 
   playerBase.display();
   computerBase.display();
}
