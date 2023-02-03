import './lib/matter.js';
import Entity from './Entity.js';
import collisions from './collisions.js';

class Movingplatform extends Entity {
    constructor(posX, posY, sizeX, sizeY) {
        super();

        this.body = Matter.Bodies.rectangle(posX, posY, sizeX, sizeY, {
            collisionFilter: {
                category: collisions.ground, // The collision category this entity belongs to
                mask: collisions.character // The collision categories this entity collides with
            },
            render: {
                fillStyle: '#ffffff'
            },
            label: this.key,
            mass:1000
        });

        this.static = false;

        this.group = 'platform'

    }

    tick() {
        Matter.Body.applyForce(this.body, this.body.position, {x:0, y:-1});
    }
}

export default Movingplatform;