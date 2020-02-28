/*
This bad boi handles the loading and unloading of tiles
Handles global variables -
Timeline range
Handles current events

Input:
Sensors to draw
ID Number
Overall range needed to draw
X/Y coordinates of top left corner of tiles

*/

import {ChartTile} from "./chartTile.js"
import {config} from "./config.js"

/*
var testTile = new ChartTile([25, 50], [-20, 20], 300, 100)
testTile.loadData([20, 55], ['test'])
testTile.plotData()
*/

class GraphComponent {
  constructor(sensors, yAxis, xRange, windowWidth) {
    this.sensors = sensors;
    this.yAxis = yAxis;
    this.xRange = xRange;
    this.loadRange = [xRange[0] - config['offScreenDistance'], xRange[1] + config['offScreenDistance']]

    // Create Graph Element
    this.graph = document.createElement("div");
    this.graph.id = "chart";
    document.getElementById("chartSection").appendChild(this.graph);
  }

  drawTiles() {

  }

  addToEnd() {

  }

  addToStart() {

  }

  drawFull() {
    this.fullTile = new ChartTile(this.loadRange, this.yAxis, config['canvasWidth'], config['canvasHeight'], 50, 0)
    this.fullTile.loadData(this.loadRange, this.sensors);
    this.fullTile.plotData();
  }



}

var testGraph = new GraphComponent(['test'], [-20, 40], [20, 55])
testGraph.drawFull()

export {GraphComponent}
