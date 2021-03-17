class Rock{
    constructor(x, y){
        var options = {
            isStatic: false

        }
        this.rock = Bodies.rectangle(x, y, 75, 75, options)
        this.width = 75
        this.height = 75
        this.image = loadImage("images/rock1.png")
        World.add(world, this.rock)
    }

    display(){
        imageMode(CENTER)
        image(this.image, this.rock.position.x, this.rock.position.y, this.width, this.height)

    }

    }
