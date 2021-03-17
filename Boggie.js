class Boggie{
    constructor(x, y){
        var options = {
            friction: 0.2,
            isStatic: false,
        }
        this.boggie = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50
        this.height = 50
        this.image = loadImage("images/coach.png")
        World.add(world, this.boggie)
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.boggie.position.x, this.boggie.position.y, this.width, this.height)

    }
}