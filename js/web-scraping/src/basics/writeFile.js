const fs = require('fs/promises');
const path = require('path')

const dummyTextPath = path.join(__dirname, 'dummy/writeText.txt')

async function example() {
  try {
    const content = 'Some content!'
    const data = await fs.writeFile(dummyTextPath, content);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();