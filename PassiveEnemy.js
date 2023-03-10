import './lib/matter.js';
import Entity from "./Entity.js";
import { keyMap } from "./lib/keyMap.js";
import collisions from './collisions.js';

class PassiveEnemy extends Entity {
    constructor(posX, posY, positions) {
        
        super()

        this.body = Matter.Bodies.rectangle(posX, posY, 40, 20, {
            collisionFilter: {
                category: collisions.enemy,
                mask: collisions.ground | collisions.character
            },
            render: {
                fillstyle: 'red'
            },
            label: this.key,
            density: 0.01
        })
        this.position = positions
        this.group = "enemy"
        this.currentTarget = 0
        this.speed =  3
    }
    tick() {

        const position = this.body.position
        const target = this.position[this.currentTarget]

        const xDirectionToTarget = Math.sign(Math.round(position.x) - Math.round(target.x))
        Matter.Body.setVelocity(this.body, {x: xDirectionToTarget * this.speed, y: this.body.velocity.y})

        if(Math.round(position.x) == Math.round(target.x)){

            this.currentTarget = this.currentTarget+1
            
            if (this.currentTrget >= this.position.length) {
                this.currentTarget = 0
            }        
        }


    }
}

export default PassiveEnemy;