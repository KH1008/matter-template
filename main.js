import './lib/matter.js';
import { keyMapper } from './lib/keyMap.js';
import { tickCounter } from './lib/tickCounter.js';
import { global } from './lib/global.js';
import Character from './Character.js';
import Platform from './Platform.js';
import Bob from "./Bob.js";
import Movingplatform from './Movingplatform.js';

function main() {

    const { Engine, Render, Runner, Composite, World } = Matter;

    // Create a running engine
    const engine = Engine.create({
        gravity: {
            x: 0,
            y: 1
        }
    });

    // Create a renderer
    const render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 1500,
            height: 680,
            wireframes: false
        }
    });

    // Add the engine, and an empty list of 'bodies' to the world
    World.add(engine.world, []);

    // Start the renderer
    Render.run(render);
    const runner = Runner.create();

    // Ensure that the physics runs at a constant speed regardless of framerate
    runner.isFixed = false;

    Runner.run(runner, engine); 

    // Define global variables:
    global.bodies = []; // List of physics 'bodies' in the world
    global.entities = []; // List of entities in the world
    global.world = engine.world;
    global.engine = engine;
    global.render = render;
    global.runner = runner;

    // Set function to run every game tick
    Matter.Events.on(runner, 'tick', tickCounter);

    // Check for keypresses and store them
    window.addEventListener('keydown', e => keyMapper(e))
    window.addEventListener('keyup', e => keyMapper(e))

    // Add entities here
    const player = new Character(50, 50, 50, 50);

    const ground = new Platform(100, 600, 100, 150);
    ground.add();
    
    const platform1 = new Platform(200,500, 50,30)
    platform1.add();

    const platform2 = new Platform(500,500, 50,30)
    platform2.add();

    const platform3 = new Platform(1100,340, 50,30)
    platform3.add();

    const platform4 = new Platform(1250,150, 50,30)
    platform4.add();

    const platform5 = new Platform(450,300, 50,30)
    platform5.add();
    const platform6 = new Platform(300,500, 50,30)
    platform6.add();
    const platform7 = new Platform(500,400, 50,30)
    platform7.add();
    const platform8 = new Platform(600,400, 50,30)
    platform8.add();
    const platform9 = new Platform(650,350, 50,30)
    platform9.add();
    const platform10 = new Platform(800,400, 50,30)
    platform10.add();
    const platform11 = new Platform(950,450, 50,30)
    platform11.add();
    const platform12 = new Platform(1030,420, 50,30)
    platform12.add();
    const platform13 = new Movingplatform(700,200, 300, 30)
    platform13.add();


    const myplayer = new Bob()
    myplayer.add();
}
window.onload = main;

function stop() {

    const { Engine, Render, Runner, Composite, World } = Matter;

    World.clear(global.world);
    Engine.clear(global.engine);
    Render.stop(global.render);
    Runner.stop(global.runner);
    global.render.canvas.remove();
    global.render.canvas = null;
    global.render.context = null;
    global.render.textures = {};

}

export { stop, main };