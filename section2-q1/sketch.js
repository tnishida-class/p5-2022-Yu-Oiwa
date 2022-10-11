// 小手調べ
function setup(){
  createCanvas(100,100);
  for(let i = 0; i < 10; i++){
    // BLANK[1]
    if(i <= 4){
      stroke(255,0,0);
    }
    else{
      stroke(0,0,255);
    } 
    ellipse(50,50,100 - i * 10);
  }
}
