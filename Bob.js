import './lib/matter.js';
import Entity from "./Entity.js";
import { keyMap } from "./lib/keyMap.js";
import collisions from './collisions.js';

class Bob extends Entity {
    constructor() {
        super()

        this.body = Matter.Bodies.rectangle(40, 60, 40, 40, {
            collisionFilter: {
                category: collisions.character, // The collision category this entity belongs to
                mask: collisions.ground // The collision categories this entity collides with
            },
            render: {
                fillStyle: '#ffffff'
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

        if (keyMap[" "] === true) {
            Matter.Body.applyForce(this.body, this.body.position, {x:0, y:-0.01})
        }
    }
}

export default Bob
