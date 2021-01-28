class Game {
    constructor() {
        this.backgroundImages;
        this.coinImage;
        this.cookieImage;
        
    }

    setup() {
        this.player = new Player();
        this.background = new Background();
        this.obstacles = [];
        this.cookies = [];
        
    } 

    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
        ]
        this.playerImage = loadImage('assets/player/po.gif');
        this.coinImage = loadImage('assets/coins/tile000.png');
        this.cookieImage = loadImage('assets/coins/cookie.png');
        
    }
    draw() {
        // console.log('drawing');
        clear();
        this.background.draw(); 
        this.player.draw();
        // obtacle comes into the scence (frameCount)
        if (frameCount % 150 === 0) {
            let obstacle = new Obstacle(this.coinImage);
            obstacle.preload();
            this.obstacles.push(obstacle);
            if (this.coinImage.x > 0) {
                this.coinImage.remove();
                }
        }
        if (frameCount % 370 === 0) {
            let cookie = new Cookies(this.cookieImage);
            cookie.preload();
            this.cookies.push(cookie);
            if (this.cookieImage.x > 0) {
                this.cookieImage.remove();
                }
        }
 
       
       
        // we iterate over obstacles and draw then on the canvas 
        this.obstacles.forEach(function (obstacle) {
            obstacle.draw()
        })
        // removes the obstacles that had a collusion or left the screen from 
        // the obstacles array
        this.obstacles = this.obstacles.filter((obstacle) => {
            
            // we have to use an arrow function bc of the correct context of 'this'
            // obstacle.collision(this.player)
            if (obstacle.collision(this.player) || obstacle.x < 0) {
                return false
             } 
            else {
                return true
            }
        })

        // we iterate over obstacles and draw them on the canvas 
        this.cookies.forEach(function (cookie) {
            cookie.draw()
        })
        // removes the obstacles that had a collusion or left the screen from 
        // the obstacles array
        this.cookies = this.cookies.filter((cookie) => {
            
            // we have to use an arrow function bc of the correct context of 'this'
            // obstacle.collision(this.player)
            if (cookie.collision(this.player) || cookie.x < 0) {
                return false
             } 
            
            else {
                return true
            }


        })
    }
    
}
