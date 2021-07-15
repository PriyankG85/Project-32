class Box {
  constructor(x, y, c) {
    var options = {
      isStatic: false,
      'restitution': 0.8,
      'friction': 1.0,
      'density': 1.0
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    World.add(world, this.body);
    this.c = c;
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos);
    rotate(angle);
    fill(this.c);
    rectMode(CENTER);
    rect(pos.x, pos.y, 50, 50);
    pop();
  }
}
