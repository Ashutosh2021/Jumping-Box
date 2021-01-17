var canvas;
var music;
var s1,s2,s3,s4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    edges=createEdgeSprites();

    s1=createSprite(100,575,195,40);
    s1.shapeColor="red";
    
    s2=createSprite(300,575,195,40);
    s2.shapeColor="purple";
    
    s3=createSprite(500,575,195,40);
    s3.shapeColor="orange";

    s4=createSprite(700,575,195,40);
    s4.shapeColor="green";

    ball=createSprite(random(20,750),200,30,30);
    ball.shapeColor="white";
    ball.velocityY=4;
    ball.velocityX=-4;

}

function draw() {
    background(rgb(169,169,169));
    
    ball.bounceOff(edges);
    
    
    
    if(isTouching(s4,ball)&& ball.bounceOff(s4)){
     
    ball.shapeColor="green";
    music.play();
 } else if (isTouching(s3,ball)&& ball.bounceOff(s3)){
     ball.shapeColor="orange";
     
 } else if (isTouching(s2,ball)&& ball.bounceOff(s2)){
     ball.shapeColor="purple";
     music.play();
 } else if (isTouching(s1,ball)&& ball.bounceOff(s1)){
    ball.shapeColor="red";
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
}    


   drawSprites();
}
