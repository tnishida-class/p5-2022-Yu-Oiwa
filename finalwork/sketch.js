// 最終課題を制作しよう
let flagA;
let flagB;

function setup(){
  createCanvas(windowWidth, windowHeight);
  textSize(14)
  tx = 0;
  hx = 0;
  bx = -40;
  by = height / 2 + 60;
  ss = 0;
  cs = 0;
  flagA = 0;
  flagB = false;
  t = "太郎";
  qt = "太郎さんはボールを見つけるためにどの箱を一番初めに探すでしょう？"
  at1 = "1.左の箱（☆）";
  at2 = "2.真ん中の箱（♢）";
  at3 = "3.右の箱（△）";
  st = "答えだと思う番号のキーを押してください";
  gt = "このように、「他の人がどのように思うか」という問題に正答できるのは4歳ごろからと言われています";
  bt1 = "答えは「左の箱」です。太郎さんは花子さんがボールを移動させたことを知りません。";
  qw = textWidth(qt);
  aw = textWidth(gt);
  p = 10;
  h = textAscent() + textDescent();
  sx = width / 2 - qw / 2 - p;
  sy = - h * 4 - p * 8;
  ax = width / 2 - aw / 2 - p;
  ay = height;
}

function draw(){
  background(160, 192, 255);
  fill(255);
  if(keyIsDown(ENTER)){
    flagB = true;
  }

  if(flagB){
    flagA = 0
    t = "太郎";
    bx = width / 4 * 3;
    by = height / 4 * 3;
    tx = width / 8;
    sy = height / 4;
    person(tx, t);
    fill(255);
    rect(sx, sy, qw + p * 4, h * 4 + p * 9, 10);
    fill(0);
    text(qt, sx + p * 2, sy + p * 3);
    text(at1, sx + p * 2, sy + h + p * 4);
    text(at2, sx + p * 2, sy + h * 2 + p * 5);
    text(at3, sx + p * 2, sy + h * 3 + p * 6);
    text(st, sx + p * 2, sy + h * 4 + p * 7);
  }

  else if(tx <= width / 4 + 35 && bx <= width / 4 - 5 && by == height / 2 + 60){
    tx += 5;
    bx += 5;
    person(tx, t);
  }

  else if(tx >= width / 4 + 35 && bx >= width / 4 - 5 && by <= height / 4 * 3){
    by += 5;
    person(tx, t);
  }

  else if(tx <= width / 4 + 40 && tx >= 0 && bx <= width / 4 && by >= height / 4 * 3){
    tx -= 5;
    person(tx, t);
  }

  else if(tx <= 0 && hx <= width / 4 + 35 && bx <= width / 4 && by >= height / 4 * 3){
    hx += 5;
    t = "花子";
    person(hx, t);
  }

  else if(tx <= 0 && hx >= width / 4 + 35 && bx <= width / 4 && by >= height / 2 + 60){
    by -= 5;
    person(hx, t);
  }

  else if (tx <= 0 && hx >= width / 4 + 35 && hx <= width / 4 * 3 + 35 && bx >= width / 4 - 5 && bx <= width / 4 * 3 - 5 && by <= height / 2 + 60){
    hx += 5;
    bx += 5;
    person(hx, t);
  }

  else if (tx <= 0 && hx >= width / 4 * 3 + 35 && bx >= width / 4 * 3 - 5 && by <= height / 4 * 3){
    by += 5;
    person(hx, t);
  }

  else if(tx <= 0 && hx <= width / 4 * 3 + 40 && hx >= 0 && bx <= width / 4 * 3 && by >= height / 4 * 3){
    hx -= 5;
    person(hx, t);
  }

  else if(hx <= 0 && tx <= width / 8 && bx <= width / 4 * 3 && by >= height / 4 * 3){
    tx += 5;
    t = "太郎";
    person(tx, t);
  }

  else if(hx <= 0 && tx >= width / 8 && bx <= width / 4 * 3 && by >= height / 4 * 3 && sy <= height / 4){
    person(tx, t);
    sy += 10;
    fill(255);
    rect(sx, sy, qw + p * 4, h * 4 + p * 9, 10);
    fill(0);
    text(qt, sx + p * 2, sy + p * 3);
    text(at1, sx + p * 2, sy + h + p * 4);
    text(at2, sx + p * 2, sy + h * 2 + p * 5);
    text(at3, sx + p * 2, sy + h * 3 + p * 6);
    text(st, sx + p * 2, sy + h * 4 + p * 7);
  }

  else if(sy >= height / 4){
    person(tx, t);
    fill(255);
    rect(sx, sy, qw + p * 4, h * 4 + p * 9, 10);
    fill(0);
    text(qt, sx + p * 2, sy + p * 3);
    text(at1, sx + p * 2, sy + h + p * 4);
    text(at2, sx + p * 2, sy + h * 2 + p * 5);
    text(at3, sx + p * 2, sy + h * 3 + p * 6);
    text(st, sx + p * 2, sy + h * 4 + p * 7);
  }

  if(keyIsDown("1".charCodeAt(0))){
    flagA = 1;
  }

  if(keyIsDown("2".charCodeAt(0))){
    flagA = 2
  }

  if(keyIsDown("3".charCodeAt(0))){
    flagA = 2
  }
  
  stroke(0);
  fill(255, 66, 99);
  ellipse(bx, by, 60);
  fill(255);
  rect(width / 2 - 40, height / 4 * 3 - 40, 80, 80);
  rect(width / 4 - 40, height / 4 * 3 - 40, 80, 80);
  rect(width / 4 * 3 - 40, height / 4 * 3 - 40, 80, 80);
  fill(255, 255, 0)
  star(width / 4, height / 4 * 3, 35);
  fill(0, 255, 0)
  quad(width / 2, height / 4 * 3 - 35, width / 2 + 35, height / 4 * 3, width / 2, height / 4 * 3 + 35, width / 2 - 35, height / 4 * 3);
  fill(128, 0, 128)
  triangle(width / 4 * 3, height / 4 * 3 - 35, width / 4 * 3 + 35, height / 4 * 3 + 35, width / 4 * 3 - 35, height / 4 * 3 + 35);

  if(flagA == 1){
    if(ss <= 200){
      ss += 10;
    }
    if(ay >= height / 8 * 5){
      ay -= 5;
    }
    flagB = 0;
    fill(160, 192, 255);
    noStroke();
    rect(sx - 5, sy - 5, qw + p * 4 + 10, h * 4 + p * 9 + 10);
    person(tx, t);
    stroke(0);
    fill(255, 30, 30);
    ellipse(width / 2, height / 8 * 3, ss);
    fill(160, 192, 255);
    ellipse(width / 2, height / 8 * 3, ss - 50);
    fill(255);
    rect(ax, ay, aw + p * 4, p * 3 + h);
    fill(0);
    noStroke();
    text(gt, ax + p * 2, ay + p * 2 + h / 2);
  }

  if(flagA == 2){
    if(cs <= 20){
      cs += 1;
    }
    if(ay >= height / 8 * 5){
      ay -= 5;
    }
    flagB = 0;
    fill(160, 192, 255);
    noStroke();
    rect(sx - 5, sy - 5, qw + p * 4 + 10, h * 4 + p * 9 + 10);
    person(tx, t);
    fill(30, 30, 255);
    cross(width / 2, height / 8 * 3, cs);
    stroke(0);
    fill(255);
    rect(ax, ay, aw + p * 4, p * 4 + h * 2);
    fill(0);
    noStroke();
    text(bt1, ax + p * 2, ay + p * 2 + h / 2);
    text(gt, ax + p * 2, ay + p * 3 + h / 2 * 3);
  }

  if(flagA == 0){
    ss = 0;
    cs = 0;
    ay = height;
  }
}

function person(x, t){
  let w = textWidth(t);
  fill(255);
  noStroke();
  ellipse(x - 40, height / 4 * 3 - 181, 50);
  rect(x - 80, height / 4 * 3 - 160, 80, 40, 200);
  rect(x - 80, height / 4 * 3 - 145, 19, 100, 10);
  rect(x - 19, height / 4 * 3 - 145, 19, 100, 10);
  rect(x - 60, height / 4 * 3 - 145, 40, 100, 10);
  rect(x - 60, height / 4 * 3 - 60, 19, 100, 10);
  rect(x - 39, height / 4 * 3 - 60, 19, 100, 10);
  fill(0);
  text(t, x - 40 - w / 2, height / 4 * 3 - 135);
}

function cross(x, y, s){
  stroke(0);
  quad(x - 5, y - s + 5, x + s * 5, y - s * 6, x + s * 6, y - s * 5, x + s - 5, y + 5)
  quad(x + s - 5, y - 5, x + s * 6, y + s * 5, x + s * 5, y + s * 6, x - 5, y + s - 5)
  quad(x - s * 6, y + s * 5, x - s + 5, y - 5, x + 5, y + s - 5, x - s * 5, y + s * 6)
  quad(x - s * 5, y - s * 6, x + 5, y - s + 5, x - s + 5 , y + 5, x - s * 6, y - s * 5)
  noStroke()
  quad(x + 6, y - s - 4, x + s + 4, y - 6, x - 6, y + s + 4, x - s - 4, y + 6)
  quad(x - 6, y - s - 4, x + s + 4, y + 6, x + 6, y + s + 4, x - s - 4, y - 6)
}

function star(cx, cy, r){
  beginShape();
  noStroke();
  for(let i = 0; i < 5; i++){
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
