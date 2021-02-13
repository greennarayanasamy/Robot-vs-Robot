var database;
var backgroundImage;
var robot1, robot1Image; 
var robot2, robot2Image;
var player,form;
var allPlayers;
var score = 0;
var gameState = 0;
var playerCount = 0;

function preload(){
  backgroundImage = loadImage("Images/background.png");
  robot1Image = loadImage("Images/robot.png ");
  robot2Image = loadImage("Images/robot2.png");
}


function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
    game.end();
  }
  if (playerCount === 2) {
    game.update(1);
  }
  drawSprites();
}  