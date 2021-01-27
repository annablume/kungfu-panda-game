class Obstacle {
    constructor(image) { 
        this.image = image;
        this.x = width;
        // makes the coins appear at random y positions on the screen - not on the 
        // lower part of the screen
        this.y = (Math.random() * height) / 2.5;
        this.width = 35;
        this.height = 35;
        this.sound;
    }

    preload() {
        this.sound = createAudio('assets/sounds/flute.wav'); 
    }

    collision(playerInfo) {
        // console.log('collision', playerInfo);
        // get the middle of the coin  
        let obstacleX = this.x + this.width / 2;
        let obstacleY = this.y + this.height / 2;
        // get the middle of the player
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        // use p5 dist() function to measure distance between two objects
        if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
            return false
        } else {
            // collision was detected

            game.player.scoreD += 1;
            this.sound.play();
            this.sound.volume(0.1);
            console.log('works');
            return true
        }

    }
    draw() {
        this.x -= 2;
        image(this.image, this.x, this.y, this.width, this.height);
        // console.log('obstacle drawing');
        // score and text
        fill('white');
        textSize(18);
        text("Your dream score: " + game.player.scoreD, 700, 375); 
        
    }
}

