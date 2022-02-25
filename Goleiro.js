class Gk {
    constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
        this.image = loadImage('gk.png');
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
		var pos = this.body.position;
		imageMode(CENTER);
		image(this.image, pos.x, pos.y, this.width, this.height);
			
	}
}