const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload(){
    bg=loadImage("background5.png")
skyImg=loadImage("blue-sky-background.png")
}

function setup(){
    var canvas = createCanvas(1450,700);
    engine = Engine.create();
    world = engine.world;


}

function draw(){
   
    background(bg);
    Engine.update(engine);
    image(skyImg,0,0,1450,500)
    //strokeWeight(4);

}