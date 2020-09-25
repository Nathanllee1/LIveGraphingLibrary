import {ChartTile} from "./chartTile.js"


class Coordinator {
  constructor() {

    this.touchCanvas = document.createElement("canvas");
    document.getElementById("chartContainer").appendChild(this.touchCanvas);

    this.touchCanvas.width = 700;
    this.touchCanvas.height = 120;
    this.touchCanvas.top = 40;
    this.touchCanvas.left = 50;


    this.dataRange = [0, 100]
    this.tileRange = 30
    this.canvasWidth = 300
    this.numTiles = Math.floor(this.touchCanvas.width / this.canvasWidth) * 2;
    console.log(this.numTiles)

    this.isDragging = false;

    this.touchCanvas.addEventListener('mousedown', e=> {
      //this.chartTile.style.left = e.offsetX;
      this.isDragging = true;
      console.log('Click')
    })

    this.touchCanvas.addEventListener('mousemove', e=> {
      if (this.isDragging) {
        this.dataRange[0] = e.clientX - 0.5 * this.canvasWidth;
        console.log(e.clientX)
      }
    })

    window.addEventListener('mouseup', e=> {
      this.isDragging = false;
      console.log('Up')
    })

    /*
    const tile2 = new ChartTile(this.xRange, this.yRange, 300, 100, 350, 50);
    tile2.loadData();
    tile2.plotData();
    */


  }

  changexRange(range) {
    this.xRange = range;
  }

  renderTiles() {
    var tiles = {} // Manage like a stack

    for (var i=0; i<=this.numTiles; i++) {

    }


    const tile = new ChartTile([20, 55], [-20, 20], this.canvasWidth, 100, 50, 50);
    tile.loadData();
    tile.plotData();
  }

}

var coord = new Coordinator();
coord.renderTiles();
