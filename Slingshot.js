class Slingshot {    constructor(bodyA, locB){
    var options = {
        bodyA: bodyA,
        pointB: locB,
        stiffness: 0.03,
        length:10
    }
    this.pointB=locB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
}

 fly()
 {
        this.sling.bodyA=null

 }





display()
{

    if(this.sling.bodyA)
    {
    var pointA = this.sling.bodyA.position;
    var pointb = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointb.x, pointb.y);
    }

}

}