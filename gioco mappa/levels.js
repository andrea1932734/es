export default class Levels {
    level_width; //Altezza e larghezza dell livello (in tiles)
    level_height;
    tile_width; //Dimensione di ogni tile
    tile_height;
    water; //Mappa dei diversi livelli di tiles
    barca;
    terreno;
    tileMapImage //L'immagine da cui recuperare tutti i tile
    tileMapImgHeight; //Le dimensioni della mappa da cui recupero i tile
    tileMapImageWidth;
    constructor(level_width, level_height, tile_width, tile_height, water, barca, terreno, tileMapsrc, tileMapImgHeight, tileMapImageWidth) {
        this.level_width = level_width;
        this.level_height = level_height;
        this.tile_width = tile_width;
        this.tile_height = tile_height;
        this.water = water;
        this.barca = barca;
        this.terreno = terreno;
        this.tileMapImage = new Image(this.width, this.height);
        this.tileMapImage.src = tileMapsrc;
        this.tileMapImgHeight = tileMapImgHeight;
        this.tileMapImageWidth = tileMapImageWidth;
    }

    draw(canvasContext) {
        //Disegno l'acqua
        for (let i = 0; i < this.water.length; i++) {
            //Ottengo le coordinate sulla canvas
            let dx = (i % this.level_width) * 32;
            let dy = Math.floor(i / this.level_height) * 32;
            let tile = this.water[i];
            
            //Ottengo le coordinate sulla tilemap
            let sx = ((tile  % (this.tileMapImageWidth/32))-1) * 32; //Devo fare -1 perchè il primo tile è il n°1
            let sy = Math.floor(tile / (this.tileMapImgHeight/32)) * 32;


            if (this.water[i] != 0) {
                canvasContext.drawImage(this.tileMapImage, sx, sy, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
            }
        }
        for (let i = 0; i < this.terreno.length; i++) {
            let dx = (i % this.level_width) * 32;
            let dy = Math.floor(i / this.level_height) * 32;
            let tile = this.terreno[i];

            let sx = ((tile  % (this.tileMapImageWidth/32))-1) * 32; 
            let sy = Math.floor(tile / (this.tileMapImgHeight/32)) * 32;

            if (this.terreno[i] != 0) {
                canvasContext.drawImage(this.tileMapImage, sx, sy, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
            }
        }
        for (let i = 0; i < this.barca.length; i++) {
            let dx = (i % this.level_width) * 32;
            let dy = Math.floor(i / this.level_height) * 32;
            let tile = this.barca[i];

            let sx = ((tile  % (this.tileMapImageWidth/32))-1) * 32; 
            let sy = Math.floor(tile / (this.tileMapImgHeight/32)) * 32;

            if (this.barca[i] != 0) {
                canvasContext.drawImage(this.tileMapImage, sx, sy, this.tile_width, this.tile_height, dx, dy, this.tile_width, this.tile_height);
    }
}

}
}
