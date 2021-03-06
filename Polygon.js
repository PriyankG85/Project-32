class Polygon {
  constructor(x, y, r) {
    var options = {
      isStatic: false,
      'restitution': 0.4,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.circle(x, y, (r-20)/2, options);
    this.image=loadImage('polygon.png');
    World.add(world, this.body);
    this.r=r;
  }
  
  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    rotate(angle);
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
  }
}
