class Particles{
    constructor(x,y){
        var options={
            restitution:0.4,
          
        }
        this.body=Bodies.circle(x,y,10,options);
        this.r=5;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        angleMode(RADIANS)
        rotate(angle);
       ellipseMode(RADIUS);
        fill(this.color);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}