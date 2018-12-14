class SnowCanvas {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.snowFlakes = [];
        this.boundUpdate = this.update.bind( this );
        this.resizeTimer;

        document.body.appendChild( this.canvas );

        window.addEventListener( 'resize', _ => this.resize() );

        this.resize();
        requestAnimationFrame( this.boundUpdate );
        this.createSnowflakes();
    }

    resize() {
        this.height = window.innerHeight;
        this.width = window.innerWidth;
        this.canvas.height = this.height;
        this.canvas.width = this.width;
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        if ( this.snowFlakes.length > 0 ) {
            this.snowFlakes.forEach( flake => {
                flake.update();

                this.ctx.save();
                this.ctx.fillStyle = '#fff';
                this.ctx.beginPath();
                this.ctx.arc( flake.x, flake.y, flake.radius, 0, Math.PI * 2 );
                this.ctx.closePath();
                this.ctx.globalAlpha = flake.alpha;
                this.ctx.fill();
                this.ctx.restore();
            });
        }

        requestAnimationFrame( this.boundUpdate );
    }

    createSnowflakes() {
        for ( let i = 0; i < window.innerWidth; i++ ) {
            this.snowFlakes.push( new Snowflake() );
        }
    }
}

class Snowflake{
    constructor() {
        this.alpha = 0;
        this.radius = 0;
        this.vx = 0; //horizontal velocity
        this.vy = 0; //vertical velocity
        this.x = 0;
        this.y = 0;

        this.reset();
    }

    getRandBetween( min, max ) {
        return min + Math.random() * (max - min);
    }

    reset() {
        this.alpha = this.getRandBetween(0.1, 0.9);
        this.radius = this.getRandBetween(1, 4);
        this.vx = this.getRandBetween(-3, 3);
        this.vy = this.getRandBetween(2, 5);
        this.x = this.getRandBetween(0, window.innerWidth);
        this.y = this.getRandBetween(0, -window.innerHeight);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if ( (this.y + this.radius) > window.innerHeight ) {
            this.reset();
        }
    }

}

new SnowCanvas();