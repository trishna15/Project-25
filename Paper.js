class Paper
{
  constructor(x,y,radius){
var options={
    isStatic:false,
    'restitution':0.3,
    'friction':0.5,
    'density':1.2
}
this.x = x;
this.y = y;
this.radius = radius;
this.image = loadImage("paper.png");
this.body = Bodies.circle(this.x,this.y,(this.radius-20)/2,options);


World.add(world,this.body);
  }  
  display(){

    var paperpos = this.body.position
     

  
push()
translate(paperpos.x,paperpos.y);
rectMode(CENTER);
//circle(this.body.position.x,this.body.position.y,this.radius);

imageMode(CENTER);
image(this.image,0,0,this.radius,this.radius);

  }
}