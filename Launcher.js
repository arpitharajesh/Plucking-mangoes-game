/*class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 100
        }
        //this.bodyA = bodyA;
       this.pointB = pointB;
       this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(10);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}*/

class launcher{
    constructor(body, anchor) {
      var options = {
        bodyA: body,
        pointB: anchor,
        stiffness: 0.004,
        length: 1,
      };
  
      this.bodyA = body;
      this.pointB = anchor;
      this.launcher = Constraint.create(options);
      World.add(world, this.launcher);
    }
    attach(body) {
      this.launcher.bodyA = body;
    }
  
    fly() {
      this.launcher.bodyA = null;
    }
  
    display() {
      if (this.launcher.bodyA) {
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
       
      
        strokeWeight(2);
      
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        
      }
    }
  }