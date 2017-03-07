var r, g, b, sizet;

function setup() {
    r = Math.ceil(random(0, 255));
    g = Math.ceil(random(0, 255));
    b = Math.ceil(random(0, 255));
    sizet = 40;
    createCanvas(1920, 1080);
}

function draw() {

    if (mouseIsPressed) {
        if (mouseButton == LEFT) {
            send(connection, mouseX + "," + mouseY + "," + sizet + "," + r + "," + g + "," + b);
        }
    }

    if (keyIsPressed) {
        if (keyCode == 67) {
            r = Math.ceil(random(0, 255));
            g = Math.ceil(random(0, 255));
            b = Math.ceil(random(0, 255));
            keyIsPressed = false;
        }
        if (keyCode == 83) {
            if (sizet > 5)
                sizet = sizet - 3;
            keyIsPressed = false;
        }
        if (keyCode == 66) {
            if (sizet < 80)
                sizet = sizet + 3;
            keyIsPressed = false;
        }
    }
}