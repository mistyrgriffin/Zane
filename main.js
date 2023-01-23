let engine = Matter.Engine.create()

let rederer = Matter.Render.create({
    element: document.body,
    engine: engine,
    options: {
        height: 600
        width: 800
    }
})

let ground = Matter.Bodies.rectangle(400, 200, 200, 50)

Matter.World.add(engine.world, ground)

Matter.Render.run(rederer)
Matter.Runner.run(engine)
