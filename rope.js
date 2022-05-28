class rope{
	constructor(body1,body2, offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(options)
		World.add(world,this.rope)
		con=Matter.Constraint.create({
			bodyA:{x:200,y:20},bodyB:rope,pointB:{x:0,y:0},length:100,stiffness:0.1
		  });
		  World.add(world,con);
		this.offsetX = offsetX
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);
		
		  
		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y);
		
	}

}