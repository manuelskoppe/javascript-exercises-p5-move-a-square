let x = 175;  
let y = 175;  

function setup() {
    createCanvas(400, 400);
    background(220);
    fill(255, 0, 0);
    rect(x, y, 50, 50);
}

function draw() {
    background(220);  
    rect(x, y, 50, 50);  
}

function keyPressed() {
    const pasos = 10;  

    if (keyCode === LEFT_ARROW) {
        x -= pasos;
    } else if (keyCode === RIGHT_ARROW) {
        x += pasos;
    } else if (keyCode === UP_ARROW) {
        y -= pasos;
    } else if (keyCode === DOWN_ARROW) {
        y += pasos;
    }

    
    return false;  
}
