// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let vx;
let x;
let size;
let g;
const vxMax = 2

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 200;
  g = 0.5
  vx = 1
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  if(keyIsDown("A".charCodeAt(0))){
    vx = vx * 2 
    }
  ellipse(width / 2, height / 2, size);
  count +=vx
  vx += g
  vx = constrain(vx+g, -vxMax, vxMax)
  if(count < 100){
    size = count
    }
  if(count > 100){
    size = 200 - count
  }   
}
