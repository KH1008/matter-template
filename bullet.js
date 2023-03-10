import './lib/matter.js';
import Entity from "./Entity.js";
import { keyMap } from "./lib/keyMap.js";
import collisions from './collisions.js';

class Bullet extends Entity {
    constructor() {
        super()

        this.body = Matter.Bodies.rectangle(posX, posY,15,18,{
            collisionFilter: {
                category: collisions.character,
                mask: collisions.enemy
            },
            render: {
                fillstyle: 'green'
            },
            label: this.key,
            density: 0.01
        })
        this.group = "bullet"

        this.velocity = {x:vX, y:vY}
        }

        tick() {

            Matter.Body.setVelocity()

        }
    }

export default Bullet