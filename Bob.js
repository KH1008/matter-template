import './lib/matter.js';
import Entity from "./Entity.js";
import { keyMap } from "./lib/keyMap.js";
import collisions from './collisions.js';
import getByGroup from './lib/getByGroup.js';

class Bob extends Entity {
    constructor() {
        super()

        this.body = Matter.Bodies.rectangle(100, 580, 30, 30, {
            collisionFilter: {
                category: collisions.character, // The collision category this entity belongs to
                mask: collisions.ground // The collision categories this entity collides with
            },
            render: {
                sprite: {
                    texture: 'gd.png',
                    xScale: 0.15625,
                    yScale: 0.15625
                }
            },
            label: this.key,
        });
        this.group = 'character';
    } 

    tick(){
        console.log('hello')

        if (keyMap["ArrowRight"] === true) {
            Matter.Body.applyForce(this.body, this.body.position, {x:0.002,y:0})

        }

        if (keyMap["ArrowLeft"] === true) {
            Matter.Body.applyForce(this.body, this.body.position, {x:-0.002,y:0})
        }

        

        if(Matter.Query.collides(this.body, getByGroup("platform").bodies).length > 0) {

            if (keyMap[" "] === true) {
                Matter.Body.applyForce(this.body, this.body.position, {x:0, y:-0.03})
            }
        }
    }
}

export default Bob
