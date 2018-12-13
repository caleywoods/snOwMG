// could also do an IIFE here

class SnowCanvas {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = canvas.getContext('2d');

        window.addEventListener( 'resize', _ => this.resizeHandler() );

        this.resizeHandler();
        this.boundUpdate = this.update.bind( this );

        requestAnimationFrame( this.update );
    }

    resizeHandler() {
        this.canvas.height = window.innerHeight;
        this.canvas.height = window.innerWidth;
    }

    update() {
        requestAnimationFrame( this.update );
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