let nbarray = [];
// 初始內容
function setup() {
  createCanvas(600, 400, WEBGL); // 決定 使用 3D 方式進行渲染
  for(let i=0;i<7;i+=1){
    //開始的定義為何;怎樣才會停止;每次執行時改變什麼
    // 怎麼把東西放到 nbarray 袋子裡面的公式
    nbarray.push(new myBox(-width/2.3+(width/7)*i,-100, 0));
  }
}
function draw() {
    background(200, 50 ,100);
  push();
   translate(mouseX-width/2, mouseY-height/2 ,30);
    if(mouseIsPressed){
    rotateX(frameCount*-0.3);
    }
   rotateY(frameCount*-0.3);
   fill(10,100,150);
   cone(15, 40);
  pop();

  // 將袋子中 所有 東西 稱為 V 執行他的相關函式
  nbarray.forEach((v)=>{
    v.display();
  }
  )
}

// 自訂一個類別物件
class myBox{
  // 怎樣建構這個物件 只執行一次
  constructor(x,y,z,size){
    this.x=x;
    this.y=y;
    this.z=z;
    this.size=(25, 25);
    this.mx = 2; //原本的移動速度
  }
  // 定義一些能力 我們呼叫時 執行 
  // 能力1:顯現這box
  display(){
    push();
      translate(this.x,this.y,this.z);
    if(mouseIsPressed){
      if (mouseX-width/2 > this.x-this.size/2 && 
          mouseX-width/2 < this.x+this.size/2 &&
          mouseY-height/2 > this.y-this.size/2 && 
          mouseY-height/2 < this.y+this.size/2){
        rotateX(frameCount*0.2);
        rotateY(frameCount*0.2);//碰到時轉動程度
        this.mx = this.mx+0.5; //碰到後移動速度
      }
    }
    fill(20,100,0);
   stroke(100, 204-this.y*0.5,100);
      ellipsoid(this.size);
    pop();
    this.move();
  }
  //能力2:移動規則
  move(){
    if (this.y>height/2){this.mx = -1*this.mx;}
    if (this.y<-height/2){this.mx = -1*this.mx;} //碰到邊緣折返
    this.y = this.y + this.mx;
  }
}