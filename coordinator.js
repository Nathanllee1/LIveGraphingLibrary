/*
This bad boi handles the loading and unloading of tiles
Handles global variables -
Timeline range
Handles current events
*/

import {ChartTile} from "./chartTile.js"

var testTile = new ChartTile([25, 50], [-20, 20], 800, 1000)
testTile.loadData([20, 55], ['test'])
testTile.plotData()
//testTile.initialize()
