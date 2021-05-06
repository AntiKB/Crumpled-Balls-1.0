class Paper{
    constructor(x,y,width,height,angle){
        var Options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,radius,Options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        trasnlate(this.body.poistion.x,this.body.position.y);
        rotate(angle);
        pop();
    }
}