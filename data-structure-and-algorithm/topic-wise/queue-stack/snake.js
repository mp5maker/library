const readline = require('readline')

class Snake {
  constructor() {
    this.snakeBody = [
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4]
    ]
  }

  draw(size = 10) {
    const grid = []
    for (let r = 0; r < size; r++) {
      let row = []
      for (let c = 0; c < size; c++) {
        row.push(' ')
      }
      grid.push(row)
    }
    this.snakeBody.forEach((position) => {
      const [row, column] = position
      grid[row][column] = 'O'
    })
    console.clear()
    grid.forEach((row) => console.log(row.join('|')))
  }

  move(direction) {
    const delta = {
      up: [-1, 0],
      down: [1, 0],
      left: [0, -1],
      right: [0, 1]
    }

    const currentHead = this.snakeBody[this.snakeBody.length - 1]
    const [currentRow, currentCol] = currentHead
    const [changeRow, changeCol] = delta[direction];
    const newHead = [currentRow + changeRow, currentCol + changeCol]
    this.snakeBody.push(newHead);
    this.snakeBody.shift()
  }

  play() {
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);
    process.stdin.resume()
    process.stdin.on('keypress', (_, key) => {
        if (key.name == 'w') this.move('up')
        if (key.name == 'a') this.move('left')
        if (key.name == 's') this.move('down')
        if (key.name == 'd') this.move('right')
        if (key.name == 'c' && key.ctrl == true) process.exit()
        this.draw()
    })
  }
}

const game = new Snake();
// game.draw();
// console.log('=========')
game.move('right');
// game.move('up');
// game.draw();
game.play()