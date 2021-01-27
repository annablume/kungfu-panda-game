

class Cookies {
    constructor(image) { 
        this.image = image;
        this.x = width;
        // makes the cookies appear at random y positions on the screen - not on the 
        // lower part of the screen
        this.y = (Math.random() * height) / 2.5;
        this.width = 50;
        this.height = 50;
        this.sound;
        
        
    }

    preload() {
        this.sound = createAudio('assets/sounds/gong.mp3'); 
    }

    setup() {
        // setVolume doesn't work here:
        // this.sound.setVolume(0);
        
    }

    collision(playerInfo) {
        // console.log('collision', playerInfo);
        // get the middle of the cookie  
        let cookieX = this.x + this.width / 2;
        let cookieY = this.y + this.height / 2;
        // get the middle of the player
        let playerX = playerInfo.x + playerInfo.width / 2;
        let playerY = playerInfo.y + playerInfo.height / 2;
        // use p5 dist() function to measure distance between two objects
        if (dist(cookieX, cookieY, playerX, playerY) > 25) {
            return false
        } else {
            // collision was detected

            game.player.scoreW += 1;
            
            this.sound.play();
            this.sound.volume(0.1);
            
            if (game.player.scoreW > (random(1, 5))) {
                // fill('white');
                // textSize(36);
                // text("You don't need talent to gain experience.", 300, 175); 
                let queryselector = document.querySelector(".saying h2");
                queryselector.innerText = ("You don't need talent to gain experience.")

            }
            console.log('works');
            return true
            resetSketch()
        }
 
    }


    draw() {
        
        this.x -= 2;
        image(this.image, this.x, this.y, this.width, this.height);
        // console.log('obstacle drawing');
        // score and text;


        fill('white');
        textSize(18);
        text("Wisdom: " + game.player.scoreW, 550, 375); 



    }
}

