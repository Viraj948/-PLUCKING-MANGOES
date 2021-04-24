class launcher{
    constructor(bodyA,pointB){
var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:0.004,
    length:20
}
this.pointB=pointB
this.sling=Constraint.create(options);
World.add(world,this.sling)
    }
    fly(){
        this.sling.bodyA=null;
    }
    
        Launch(BodyA){
            this.sling.bodyA=body
        }
    
    display(){
       

    }
}