var r, g, b, size;

function setup() {
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    size = 40;
    createCanvas(2048, 2048);
}

function draw() {
    if (mouseIsPressed) {
        if (mouseButton == LEFT) {
            fill(color(r, g, b))
            strokeWeight(0);
            ellipse(mouseX, mouseY, size, size);
        }
    }
    if (keyIsPressed) {
        if (keyCode == 67) {
            r = random(0, 255);
            g = random(0, 255);
            b = random(0, 255);
            keyIsPressed = false;
        }
        if (keyCode == 83) {
            if (size > 5)
                size = size - 3;
            keyIsPressed = false;
        }
        if (keyCode == 66) {
            if (size < 80)
                size = size + 3;
            keyIsPressed = false;
        }
    }
}

var x = screen.width / 2 - 700 / 2;
var y = screen.height / 2 - 450 / 2;
window.open(meh.href, 'sharegplus', 'height=485,width=700,left=' + x + ',top=' + y);