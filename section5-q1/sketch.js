// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 20, 20, 125, 125, 125);
}

function balloon(t, x, y, cr, cg, cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10;
  fill(cr, cg, cb);
  noStroke()
  rect(x, y, x + w + p, y + h + p, 10);
  triangle(x + w + p - 20, y + h + p + 20, x + w + p - 10, y + h + p + 40, x + w + p - 10, y + h + p + 20);
  fill(255);
  text(t, x + p + 5, y + h + p);
}
