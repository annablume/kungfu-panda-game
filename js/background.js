class Background {
    draw() {
        // console.log('this is the background');
        game.backgroundImages.forEach(function (img) {
            // here we use the speed property of the image instead of
            // a specific value so that every image moves at a different speed
            img.x -= img.speed /2 ;
            image(img.src, img.x, 0, width, height)
            // this puts a second image after the first
            image(img.src, img.x + width, 0, width, height)
            // if the image leaves the screen we set it back to it's starting
            // position
            if (img.x <= - width) {
                img.x = 0;  
            }
        })
       
    }
}
