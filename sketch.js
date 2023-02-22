let move = false;
let rock = 0;


function preload() {
  flames1 = loadImage("img/flames1.jpg");
  flames = loadImage("img/flames.gif");
  des1 = loadImage("img/des1.jpg");
  des2 = loadImage("img/des2.png");
  des3 = loadImage("img/des3.jpg");
  des4 = loadImage("img/des4.JPG");
  des5 = loadImage("img/des5.jpg");
  des6 = loadImage("img/des6.JPG");
  fun1 = loadImage("img/fun1.jpg");
  fun2 = loadImage("img/fun2.jpg");
  fun3 = loadImage("img/fun3.jpg");
  fun4 = loadImage("img/fun4.jpg");
  fun5 = loadImage("img/fun5.jpg");
  fun6 = loadImage("img/fun6.jpg");
  sleep = loadImage("img/sleep.png");
  play = loadImage("img/play.png");
  burn = loadImage("img/burn.png");
  repeat = loadImage("img/repeat.png");
}

function setup() {
  createCanvas(865, 750);
  angleMode(DEGREES);
  imageMode(CENTER);
  deg = 0;
}

function draw() {
  if (move) {
    image(flames,432.5,375);
  } else {
    image(flames1,432.5,375);
  }

  if (rock > 0 && rock < 24) {
    push()
    translate(420,380);
    rotate(-5);
    tint(255,190);
    image(des3,0,0);
    pop();
  }

  if (rock > 1 && rock < 23) {
    push()
    translate(745,120);
    rotate(30);
    tint(255,190);
    image(fun1, 0, 0);
    pop()
  }

  if (rock > 2 && rock < 22) {
    push()
    translate(290,620);
    rotate(15);
    tint(255,190);
    image(des2,0,0);
    pop();
  }

  if (rock > 3 && rock < 21) {
    push()
    translate(700,615);
    rotate(-20);
    tint(255,190);
    image(fun2,0,0);
    pop();
  }

  if (rock > 4 && rock < 20) {
    push()
    translate(175,200);
    rotate(-20);
    tint(255,190);
    image(des1,0,0);
    pop()
  }

  if (rock > 5 && rock < 19) {
    push()
    translate(125,500);
    rotate(-35);
    tint(255,190);
    image(fun3,0,0);
    pop();
  }

  if (rock > 6 && rock < 18) {
    push()
    translate(625,430);
    rotate(25);
    tint(255,190);
    image(des4,0,0);
    pop();
  }

  if (rock > 7 && rock < 17) {
    push()
    translate(500,550);
    rotate(20);
    tint(255,190);
    image(fun4,0,0);
    pop();
  }

  if (rock > 8 && rock < 16) {
    push()
    translate(420,100);
    rotate(15);
    tint(255,190);
    image(des5,0,0);
    pop();
  }

  if (rock > 9 && rock < 15) {
    push()
    translate(690,290);
    rotate(-15);
    tint(255,190);
    image(fun5,0,0);
    pop();
  }

  if (rock > 10 && rock < 14) {
    push()
    translate(70,60);
    rotate(-25);
    tint(255,190);
    image(des6,0,0);
    pop();
  }

  if (rock > 11 && rock < 13) {
    push()
    translate(190,350);
    rotate(25);
    tint(255,190);
    image(fun6,0,0);
    pop();
  }

  if (rock > 26 && rock < 34) {
    push()
    translate(432.5,0);
    image(sleep,0,150);
    pop()
  }

  if (rock > 28 && rock < 36) {
    push()
    translate(432.5,0);
    image(play,0,300);
    pop()
  }

  if (rock > 30 && rock < 38) {
    push()
    translate(432.5,0);
    image(burn,0,450);
    pop()
  }

  if (rock > 32 && rock < 40) {
    push()
    translate(432.5,0);
    image(repeat,0,600);
    pop()
  }

  if (rock > 39) {
    move = false;
    rock = 0;
  }
}

function mouseClicked() {
  if (move) {
    move = false;
  } else {
    move = true;
  }
}

function keyPressed() {
  if (move){
  rock++;
  }
}