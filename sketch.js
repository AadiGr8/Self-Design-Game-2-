var plain, plainImg;
var cityImg;
var b1Img, b2Img, b3Img;
var edges;

function preload(){
  cityImg = loadImage("city.png");
  plainImg = loadImage("plane1.png");
  b1Img = loadImage("bird.png");
  b2Img = loadImage("bird2.png");
  b3Img = loadImage("bird4.png");


}

function setup(){
  createCanvas(700,700)

  plain = createSprite(50,350,0,0);
  plain.addImage(plainImg);
  plain.scale = 0.3;

}

function draw(){
  background(cityImg);
  edges = createEdgeSprites();
  
  plain.collide(edges);
  plain.y = mouseY

  bird();


  drawSprites();



}

function bird(){
  if(frameCount%100===0){
  var bird = createSprite(750,0,10,10);
  bird.lifetime = -1;
  bird.velocityX = -4;
  bird.y = Math.round(random(10,650));
  
  var rand = Math.round(random(1,3))
    switch(rand){
      case 1: bird.addImage(b1Img);
      bird.scale = 0.25;
      break;
      
      case 2: bird.addImage(b2Img);
      bird.scale = 0.25;
      break;  
        
      case 3: bird.addImage(b3Img);    
      bird.scale = 0.25;
      break;
        
      default:break;
    }
    
  }
}