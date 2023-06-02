function preload() {
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 500);
    stroke(0, 255, 0);
    fill(0, 0, 250);
    rect(0, 0, 500, 15);
    rect(0, 385, 500, 15);
    rect(0, 0, 15, 400);
    rect(485, 0, 15, 400);
    stroke(0, 0, 255);
    fill(250, 0, 0);
    circle(0, 0, 75);
    circle(500, 0, 75);
    circle(0, 400, 75);
    circle(500, 400, 75);
    stroke(0, 250, 0);
    fill(0, 250, 0);
    rect(50, 37.5, 400, 25);
    rect(50, 400-62.5, 400, 25);
    rect(37.5, 37.5, 25, 300);
    rect(500-62.5, 37.5, 25, 300);
    stroke(0, 0, 255);
    fill(250, 0, 0);
    ellipse(50, 50, 35, 35);
    ellipse(500 - 50, 50, 35, 35);
    ellipse(50, 400 - 50, 35, 35);
    ellipse(500 - 50, 400 - 50, 35, 35);
}

function take_snapshot(){
    save("Framed Photo.png")
}
