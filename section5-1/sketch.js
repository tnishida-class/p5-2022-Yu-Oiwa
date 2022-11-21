// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(400, 300);
  background(0, 0, 255);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 200 + cos(theta) * 100;
    let y = 150 + sin(theta) * 100;
    noStroke()
    fill(255, 255, 0)
    star(x, y, 15)
  }
}

function star(cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}
// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
