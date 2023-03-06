let move = false;
let rock = 0;
let d1;
let d2;
let d3;
let d4;
let d5;
let d6;
let f1;
let f2;
let f3;
let f4;
let f5;
let f6;
let des = [];
let fun = [];
let desShown = [];
let funShown = [];


function preload() {
  flames1 = loadImage("img/flames1.jpg");
  flames = loadImage("img/flames.gif");
  des[0] = loadImage('img/des1.jpg');
  des[1] = loadImage('img/des2.png');
  des[2] = loadImage('img/des3.jpg');
  des[3] = loadImage('img/des4.jpg');
  des[4] = loadImage('img/des5.jpg');
  des[5] = loadImage('img/des6.jpg');
  fun[0] = loadImage('img/fun1.jpg');
  fun[1] = loadImage('img/fun2.jpg');
  fun[2] = loadImage('img/fun3.jpg');
  fun[3] = loadImage('img/fun4.jpg');
  fun[4] = loadImage('img/fun5.jpg');
  fun[5] = loadImage('img/fun6.jpg');
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
    shuffle(des, true);
    shuffle(fun, true);
  }

  if (rock > 0) {
    push()
    translate(420,380);
    rotate(-5);
    tint(255,190);
    image(des[0],0,0);
    pop();
  }

  if (rock > 1) {
    push()
    translate(745,120);
    rotate(30);
    tint(255,190);
    image(fun[0], 0, 0);
    pop()
  }

  if (rock > 2) {
    push()
    translate(290,620);
    rotate(15);
    tint(255,190);
    image(des[1],0,0);
    pop();
  }

  if (rock > 3) {
    push()
    translate(700,615);
    rotate(-20);
    tint(255,190);
    image(fun[1],0,0);
    pop();
  }

  if (rock > 4) {
    push()
    translate(175,200);
    rotate(-20);
    tint(255,190);
    image(des[2],0,0);
    pop()
  }

  if (rock > 5) {
    push()
    translate(125,500);
    rotate(-35);
    tint(255,190);
    image(fun[2],0,0);
    pop();
  }

  if (rock > 6) {
    push()
    translate(625,430);
    rotate(25);
    tint(255,190);
    image(des[3],0,0);
    pop();
  }

  if (rock > 7) {
    push()
    translate(500,550);
    rotate(20);
    tint(255,190);
    image(fun[3],0,0);
    pop();
  }

  if (rock > 8) {
    push()
    translate(420,100);
    rotate(15);
    tint(255,190);
    image(des[4],0,0);
    pop();
  }

  if (rock > 9) {
    push()
    translate(690,290);
    rotate(-15);
    tint(255,190);
    image(fun[4],0,0);
    pop();
  }

  if (rock > 10) {
    push()
    translate(70,60);
    rotate(-25);
    tint(255,190);
    image(des[5],0,0);
    pop();
  }

  if (rock > 11) {
    push()
    translate(190,350);
    rotate(25);
    tint(255,190);
    image(fun[5],0,0);
    pop();
  }

  if (rock > 12 && rock < 20) {
    push()
    translate(432.5,0);
    image(sleep,0,150);
    pop()
  }

  if (rock > 13 && rock < 22) {
    push()
    translate(432.5,0);
    image(play,0,300);
    pop()
  }

  if (rock > 14 && rock < 24) {
    push()
    translate(432.5,0);
    image(burn,0,450);
    pop()
  }

  if (rock > 15 && rock < 26) {
    push()
    translate(432.5,0);
    image(repeat,0,600);
    pop()
  }

  if (rock > 25) {
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