class paper
{

 constructor(x, y, radius) 
 {
    var options = 
    {
        restitution:0.3,
        friction:0,
        density:1.2
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.image = loadImage("paper.png");
    World.add(world, this.body);
 }
  display()
    {
    var radius = this.body.radius;
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 35,35,100,100);
    pop();
    }

}