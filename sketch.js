const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var box11, box12, box13, box14, box15, box16, box17;
var box18, box19, box20, box21, box22;
var box23, box24, box25;

var polygon, sling;

function preload() {

}

function setup() {
    var canvas = createCanvas(1640, 800);
    engine = Engine.create();
    world = engine.world;

    // All Bodies

    ground = new Ground(width/2, height-10, width);
    stand = new Ground(width/2, 600, 580);

    // First Layer

    box1 = new Box(600, 565, 'green');
    box2 = new Box(600+55, 565, 'blue');
    box3 = new Box(600+110, 565, 'yellow');
    box4 = new Box(600+165, 565, 'red');
    box5 = new Box(600+220, 565, 'red');
    box6 = new Box(600+275, 565, 'red');
    box7 = new Box(600+330, 565, 'yellow');
    box8 = new Box(600+385, 565, 'aqua');
    box9 = new Box(600+440, 565, 'black');
    
    // Second Layer

    box11 = new Box(600+55, 515, 'green');
    box12 = new Box(600+110, 515, 'blue');
    box13 = new Box(600+165, 515, 'yellow');
    box14 = new Box(600+220, 515, 'red');
    box15 = new Box(600+275, 515, 'yellow');
    box16 = new Box(600+330, 515, 'aqua');
    box17 = new Box(600+385, 515, 'black');
    
    // Third Layer

    box18 = new Box(600+110, 465, 'green');
    box19 = new Box(600+165, 465, 'blue');
    box20 = new Box(600+220, 465, 'yellow');
    box21 = new Box(600+275, 465, 'aqua');
    box22 = new Box(600+330, 465, 'black');
    
    // Forth Layer

    box23 = new Box(600+165, 415, 'green');
    box24 = new Box(600+220, 415, 'red');
    box25 = new Box(600+275, 415, 'black');
    
    // Fifth Layer
    box10 = new Box(600+220, 365, 'yellow');

    polygon = new Polygon(220, 250, 70);

    sling = new SlingShot(polygon.body, {x:220, y:250});
}

function draw() {

    background(180);
    
    Engine.update(engine);
    
    ground.display();
    stand.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();

    sling.display();
    polygon.display();
}

function mouseDragged() {
    Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}
function mouseReleased() {
    sling.fly();
}




