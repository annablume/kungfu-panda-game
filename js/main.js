const game = new Game();


// here we preload assets - in that case the images
function preload() {
    game.preload();
}

function setup() {
    createCanvas(1000, 400)
    // button to restart the game
    resetSketch();
    const button = createButton('dream again');
    button.mousePressed(resetSketch);
    button.position(950, 50);
    button.style('color: purple');
    button.size(100, 30);
}

function resetSketch() {
    game.setup();
    
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






