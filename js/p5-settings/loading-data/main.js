var start = {
    x: 75,
    y: 75
}
var numberOfRows;
var numberOfColumns;
var table;

function preload() {
    table = loadTable("./mock-data.csv", "csv", "header")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(12)
    numberOfRows = table.getRowCount();
    numberOfColumns = table.getColumnCount();
    text(`Table Rows: ${numberOfRows}`, 25, 25)
    text(`Table Columns: ${numberOfColumns}`, 25, 50)
}

function draw() {
    background(255);
    const dataArray = table.getArray()
    for (let i = 0; i < numberOfRows; i++) {
        push()
        let currentRow = dataArray[i];
        for (let j = 0; j < numberOfColumns; j++) {
            let currentColumn = currentRow[j]
            text(currentColumn, start.x + (j * 5 * start.x), start.y + (i * start.y))
        }
        pop();
    }
    noLoop();
}