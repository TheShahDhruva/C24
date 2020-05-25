// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;


// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var world, engine;
var ground, tankBase, tankHead;
var Width, Height;
var why;
var X;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(1250,700);
    engine = Engine.create();
    world = engine.world;
    X = -4;
    ground = new Ground(width/2, height - 10, width, 20);
    tankBase = new Tanker(100,670,70);
    tankHead = new tankhead(127.5,590,120,20, PI/X);
    tankHead.x = tankBase.radius/2 + 50;
    tankHead.y = tankBase.radius;
    console.log(tankBase);
    console.log(tankHead);
    
}


function draw() {
    background(255);
    Engine.update(engine);
    tankHead.display();
    tankBase.display();
    ground.display();
   
    
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    // Call the shoot method for the cannon.
}
