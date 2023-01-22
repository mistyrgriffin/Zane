let engine = Matter.Engine.create()

let rederer = Matter.Render.create({
    element: document.body,
    engine: engine,
})

Matter.Render.run(rederer)
Matter.Runner.run(engine)
