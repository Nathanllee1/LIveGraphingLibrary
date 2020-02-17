/*
Input: x y points, y axis min/max, sensorlist

*/

export class ChartTile {

    initialize(xAxis, yAxis, canvasHeight, canvasWidth) {
        //Y Axis Variables
        this.yAxis = [-20, 20];
        this.yAxisHeight = this.yAxis[1] - this.yAxis[0];
        this.YScale = canvasHeight / this.yAxisHeight;

        //X Axis Variables
        this.xAxis = [25, 50]
        this.xAxisHeight = this.xAxis[1] - this.xAxis[0];
        this.XScale = canvasWidth / this.xAxisHeight;
        this.coordData = []

        //Create a blank canvas
        this.chartTile = document.createElement("canvas")
        chartTile.width = canvasWidth;
        chartTile.height = canvasHeight;
        document.body.appendChild(this.chartTile)
    }

    loadData(dataRange, sensors) {
        //load data from server
        this.data = [[20, 15], [25, 16], [30, 19], [35, 10], [40, -15], [45, -20], [50, 25], [55, 10]];
    }

    plotData() {
        this.ctx = chartTile.getContext('2d');
        this.ctx.beginPath();
        this.ctx.lineJoin = "round";
        this.ctx.strokeStyle = "black";

        for(var b = 0; b < this.coordData.length; b++) {
            this.newX = (this.data[i][0] - this.xAxis[0]) * this.XScale
            this.newY = (this.data[i][1] - this.yAxis[0]) * this.YScale
            this.ctx.lineTo(this.newX, this.newY)
        }
        this.ctx.stroke();
    }
}
