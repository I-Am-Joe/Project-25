class PaperClass{
    constructor(x, y, radius) {
var options = {
  'isStatic':false,
  'restitution':0.3,
  'friction':0.5,
  'density':1.2
}
this.body = Bodies.circle(x, y, radius, width, height, options);
    this.radius = radius;
    this.image = loadImage("sprites/paper.png");
    World.add(world, this.body);
}
display(){
  var pos =this.body.position;
  translate(pos.x, pos.y);
  circle(0, 0, this.radius);
}
};
