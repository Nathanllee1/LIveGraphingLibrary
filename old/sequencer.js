import {GraphComponent} from "./coordinator.js"

testGraphState = [
  {
    sensors: [test],
    yAxis: [-20, 20]
  },
  {
    sensors: [test2],
    yAxis: [69, 420]
  }
]

class Graphs {
  constructor(GraphMeta) {

    this.windowWidth = window.innerWidth;

    //Constants for the whole application
    this.tileWidth = 300
    this.tileHeight = 100
    this.tileCount = Math.floor(this.windowWidth * 2 / this.tileWidth)

    //Input data
    this.GraphMeta = GraphMeta;

    //Global Graph State
    this.graphs = []

    for (var i=0; i < this.GraphMeta.length; i++) {
      this.graphs.append( new GraphComponent(this.GraphMeta[i]['sensors'], this.GraphMeta[i]['yAxis'], this.windowWidth))
    }

    //Global X Range Controller
    this.xAxis = [0, 100]

  }

  UpdateGraphs() {

  }
}

/*
Handles globals and handles all charts
*/
