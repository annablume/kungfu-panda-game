const game = new Game();
let timer = 60;
let ele;

// here we preload the images from the game.preload
function preload() {
    game.preload();
}
function mouseClicked() {
    ele.play();
  };

function setup() {
    createCanvas(1000, 400)
    ele = createAudio('assets/sounds/china-loop.wav');
    //ele.autoplay(true)
    ele.volume(0.1);
    
    ele.loop();
;    game.setup();
    //resetSketch();
}

function draw() {
    game.draw();
}

function keyPressed() {
    // if the spacebar (key 32) is pressed
    if (keyCode === 32) {
        game.player.jump();   
    } 
    console.log(keyCode);
}

// function resetSketch() {
//     const button = createButton('dream again');
//     button.mousePressed(resetSketch);
//     button.position(CENTER, 90);
//     button.style('color: purple');
//     button.size(100, 30);
    
//     clear();
//     game.setup();
//     console.log('reset'); 
//     } 
   







