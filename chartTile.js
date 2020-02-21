/*
Input: x y points, y axis min/max, sensorlist

*/

class ChartTile {
    debugger;
    constructor(xAxis, yAxis, canvasHeight, canvasWidth) {
        //Y Axis Variables
        this.yAxis = yAxis;
        this.yAxisHeight = this.yAxis[1] - this.yAxis[0];
        this.YScale = canvasHeight / this.yAxisHeight;

        //X Axis Variables
        this.xAxis = xAxis
        this.xAxisHeight = this.xAxis[1] - this.xAxis[0];
        this.XScale = canvasWidth / this.xAxisHeight;
        this.coordData = []

        //Create a blank canvas
        this.chartTile = document.createElement("canvas")
        document.getElementById("chart").appendChild(this.chartTile);

        //Set width and height
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.chartTile.width = this.canvasWidth;
        this.chartTile.height = this.canvasHeight;
        console.log(this.chartTile.width)

    }

    loadData(dataRange, sensors) {
        //load data from server
        this.data = [[20, 15], [25, 16], [30, 19], [35, 10], [40, -15], [45, -20], [50, 25], [55, 10]];
    }

    plotData() {
        this.ctx = this.chartTile.getContext('2d');
        this.ctx.beginPath();
        this.ctx.lineJoin = "round";
        this.ctx.strokeStyle = "black";

        for(var b = 0; b < this.data.length; b++) {
            this.newX = (this.data[b][0] - this.xAxis[0]) * this.XScale
            this.newY = this.canvasHeight - (this.data[b][1] - this.yAxis[0]) * this.YScale
            //console.log(1 / this.YScale)
            console.log()
            console.log(this.newX, this.newY)
            this.ctx.lineTo(this.newX, this.newY)
        }
        this.ctx.stroke();

    }
}

export {ChartTile}
