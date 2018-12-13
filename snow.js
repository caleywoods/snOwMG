// could also do an IIFE here

class SnowCanvas {
    constructor() {
        // Maybe we should take a config here to define things like snowflake limit etc?
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.snowFlakes = [];
        this.boundUpdate = this.update.bind( this );

        document.body.appendChild( this.canvas );

        window.addEventListener( 'resize', _ => this.resizeHandler() );

        this.resizeHandler();

        requestAnimationFrame( this.boundUpdate );
    }

    resizeHandler() {
        this.canvas.height = window.innerHeight;
        this.canvas.height = window.innerWidth;

        this.createSnowflakes();
    }

    update() {
        // Update each snowflake here
        requestAnimationFrame( this.boundUpdate );
    }

    createSnowflakes() {
        this.snowFlakes = [];
        const numFlakes = window.innerWidth / 2;
        for ( let i = 0; i < numFlakes; i++ ) {
            this.snowFlakes.push( new Snowflake() );
        }

        console.log(this.snowFlakes);
    }

}
class Snowflake{
    // need width/height of the arc/circle/flurry and vertical and horizontal velocity
    constructor() {
        this.height = 0;
        this.width = 0;
        this.vx = 0;
        this.vy = 0;
    }
}

new SnowCanvas();