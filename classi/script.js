var g ;
function startGame() {
    g = new GameArea();

}

class GameArea  {  
   constructor(){

   
        this.canvas = document.getElementById("gameArea");
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea
   }


    draw (component) {
    this.context.fillStyle = component.color;
    this.context.fillRect(component.x, component.y, component.width, component.height);
  }
}
class Rectangle { 
    height; 
    width; 
    x;
    y;  
    constructor(height, width,x,y){ 
      this.height = height; 
      this.width = width; 
      this.x=x;
      this.y=y; 

    } 
  }
  
  var r = new Rectangle(10,10,50,50);


function updateGameArea() {
  g.draw(r);
}