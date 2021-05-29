class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 2
        }
        this.point=pointB
        this.chain = Constraint5.create(options);
        