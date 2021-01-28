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
            this.sound.volume(0.07);
            
            if (game.player.scoreW > (random(1, 7))) {

                // let queryselector = document.querySelector(".saying h2");
                // queryselector.innerText = ("You don't need talent to gain experience.")
                let c;
                c = color('#6e055085');
                noStroke();
                fill(c);
                rect(180, 100, 700, 140, 20);

                // here could be an object to pick a random text
                //
                textSize(30);
                fill('white')
                text("Excitement will follow you", 500, 150);

                textSize(30);
                fill('white');
                text("into any transit station of your choice.", 500, 200);

                noLoop();
            }
            console.log('works');
            return true
            
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
        textAlign(CENTER, CENTER);
        textSize(50);
        text(timer, width/2, height/2, 700, 325);
        // timer runs from 60 - 0 and stops
        if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
            timer --;
        }
        // if timer is 0 it will show the game over text
        if (timer == 0) {
            text("DREAM OVER", width/2, height*0.5);
            fill('white'); 
            noLoop();
             
        }  
    }
}

