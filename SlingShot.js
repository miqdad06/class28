class SlingShot{
    constructor(bodyA,pointB){
        var options={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 10
         }
     
         this.sling =Constraint.create(options);
         World.add(world,this.sling); 
    }

    fly(){
      this.sling.bodyA = null;
    }
  
    display() {
      if(this.sling.bodyA){
      var pointA=this.sling.bodyA.position;
      var pointB=this.pointB;
     // strokeWeight(3);
      strokeWeight(3);
      line(pointA.x,pointA.y,200,101);
    }
    }
}

   