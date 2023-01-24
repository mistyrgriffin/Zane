let engine = Matter.Engine.create()

let rederer = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        height: 600,
        width: 800
        wireframes: false
    }
})

let ground = Matter.Bodies.rectangle(600, 400, 200, 30 {
    isStatic: true,
    render: {
        fillStyle: 'brown'
    }

Matter.World.add(engine.world, ground)

Matter.Render.run(rederer)
Matter.Runner.run(engine)
