const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground;
var division;

var division=[];
var particle=[];
var plinko=[];

var divisionHeight=250; 

function setup() {
 var canvas= createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,20);

  for(var i=0;i<width;i=i+80){
    //pushing the objects inside array
    division.push(new Divisions(i,height-divisionHeight/2,5,divisionHeight));
  }
  //1st row of plinko >> pushing objects inside plinko array
  for(var i=75;i<width;i+=50){
    plinko.push(new Plinko(i,75));
  }
  //2nd row
  for(var i=50;i<width;i+=50){
    plinko.push(new Plinko(i,175));
  }
  //3rd row
  for(var i=75;i<width;i+=50){
    plinko.push(new Plinko(i,275));
  }
  //4th row
  for(var i=50;i<width;i+=50){
    plinko.push(new Plinko(i,375));
  }
  
}

function draw() {
  background(0);  
  Engine.update(engine);
 
  ground.display();
  //displaying individual element in array from division[0] to division.length
  for(k=0;k<division.length;k++){
  division[k].display();
  }
  //displaying all objects inside array
  for(k=0;k<plinko.length;k++){
   plinko[k].display();
  }

  if(frameCount%60===0){
    
    particle.push(new Particles(random(width/2-10,width/2+10),10));
  }
  for(i=0;i<particle.length;i++){
    particle[i].display();
  }
 
  drawSprites();
}