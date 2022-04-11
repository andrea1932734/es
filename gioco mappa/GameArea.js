import Level1 from "./Level1.js";
import Levels from "./levels.js";
export default class GameArea {
    constructor() {
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
  
    clear = () => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
  
    updateGameArea = () => {
      this.clear();
      this.levels.draw(this.context)
      
    };
  }
  