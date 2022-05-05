import Level1 from "./Level1.js";
import Levels from "./levels.js";
import AnimatedObject from "./AnimatedObject";
import NinjaSprites from "./NinjaSprites";
import ObstacleSprites from "./ObstacleSprites";
export default class GameArea {
  canvas = undefined;
  ninja;
  obstaclesVector = new Array();
    constructor() {
      this.ninja = new AnimatedObject(NinjaSprites.running, 60, 60, 10, 120);
     
      
    this.canvas = document.getElementById("gameArea");
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    this.interval = setInterval(this.updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea

    document.addEventListener("keydown", this.move);
    document.addEventListener("keyup", this.clearmove);

      this.levels = new Levels(
      22,
      22,
      32,
      32,
      Level1.water,
      Level1.barca,
      Level1.terreno,
      "./Path-And-Objects.png",
      512,
      512
      );

      this.canvas = document.getElementById("gameArea");
      this.canvas.width = 704;
      this.canvas.height = 704;
      this.context = this.canvas.getContext("2d");
      this.interval = setInterval(this.updateGameArea, 20); //ogni 20 ms chiamo il metodo updateGameArea
    }
    
    drawAnimatedObject(gameObject) {
      this.context.drawImage(
        gameObject.image,
        gameObject.x,
        gameObject.y,
        gameObject.width,
        gameObject.height
      );
    }
  
    clear = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    move = e => {
      switch (e.key) {
        case "ArrowUp":
          this.ninja.speedY = -2;
          break;
        case "ArrowDown":
          this.ninja.speedY = 2;
          break;
        case "ArrowLeft":
          this.ninja.speedX = -2;
          break;
        case "ArrowRight":
          this.ninja.speedX = 2;
          break;
      }
    };
    clearmove = () => {
      this.ninja.speedX = 0;
      this.ninja.speedY = 0;
    };
  }
  
  
  updateGameArea = () => {
    this.clear();
    this.ninja.update(this.obstaclesVector);
    this.drawAnimatedObject(this.ninja);

    //Disegno ogni oggetto dentro obstaclesVector
    for (let oggetto of this.obstaclesVector) {
      this.drawAnimatedObject(oggetto);
    }
  };

  
  