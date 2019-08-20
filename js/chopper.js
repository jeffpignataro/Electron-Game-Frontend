var canvas = document.getElementById("game-map")
context = canvas.getContext('2d');

var chopper_width = 55
var chopper_height = 19

var start_x = canvas.width / 2 - 30;
var start_y = canvas.height / 2 - 10;

chopper_start();

function chopper_start() {
    chopper = new Image();
    chopper.src = './img/chopper-sprite.gif';
    chopper.onload = function () {
        context.drawImage(chopper, start_x, start_y, chopper_width, chopper_height);
    }
}