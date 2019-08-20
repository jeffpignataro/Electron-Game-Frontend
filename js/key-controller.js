var canvas = document.getElementById("game-map")
context = canvas.getContext('2d');

var chopper_width = 55
var chopper_height = 19

var current_x = canvas.width / 2 - 30;
var current_y = canvas.height / 2 - 10;
var lastpress;
var accel_x = accel_y = 0;

var arrowLeft = "ArrowLeft"
var arrowRight = "ArrowRight"
var arrowUp = "ArrowUp"
var arrowDown = "ArrowDown"

document.addEventListener("keydown", function (event) {
    event.preventDefault();
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    switch (key) { // change to event.key to key to use the above variable
        case arrowLeft:
            // Left pressed
            if (lastpress != arrowLeft) {
                accel_x = accel_y = 0;
            }
            move_chopper(-5, 0, -1, 0)
            lastpress = arrowLeft;
            break;
        case arrowRight:
            // Right pressed
            if (lastpress != arrowRight) {
                accel_x = accel_y = 0;
            }
            move_chopper(5, 0, 1, 0)
            lastpress = arrowRight;
            break;
        case arrowUp:
            // Up pressed
            if (lastpress != arrowUp) {
                accel_x = accel_y = 0;
            }
            move_chopper(0, -3, 0, -1)
            lastpress = arrowUp;
            break;
        case arrowDown:
            // Down pressed
            if (lastpress != arrowDown) {
                accel_x = accel_y = 0;
            }
            move_chopper(0, 3, 0, 1)
            lastpress = arrowDown;
            break;
    }
});

function move_chopper(x, y, accelerate_x, accelerate_y) {
    new_x = current_x + x
    new_y = current_y + y

    accel_x = accel_x + accelerate_x;
    accel_y = accel_y + accelerate_y;

    if (accel_x > 10) {
        accel_x = 10
    }
    if (accel_y > 3) {
        accel_y = 3
    }
    if (accel_x < -10) {
        accel_x = -10
    }
    if (accel_y < -3) {
        accel_y = -3
    }
    new_x = new_x + accel_x
    new_y = new_y + accel_y

    //Limits of the canvas
    if (new_x < 0) {
        new_x = 0;
    }
    if (new_x >= canvas.width - chopper_width) {
        new_x = canvas.width - chopper_width;
    }

    if (new_y < 0) {
        new_y = 0;
    }
    if (new_y >= canvas.height - chopper_height) {
        new_y = canvas.height - chopper_height;
    }
    //Limits of the canvas

    context.clearRect(0, 0, canvas.width, canvas.height);

    chopper = new Image();
    chopper.src = './img/chopper-sprite.gif';
    chopper.onload = function () {
        context.drawImage(chopper, new_x, new_y, chopper_width, chopper_height);

    }
    current_x = new_x;
    current_y = new_y;


    //Debugging
    var x_label = document.getElementById("x")
    var y_label = document.getElementById("y")
    x_label.innerHTML = current_x
    y_label.innerHTML = current_y
}