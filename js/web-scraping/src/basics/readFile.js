const fs = require('fs/promises');
const path = require('path')

const dummyTextPath = path.join(__dirname, 'dummy/readText.txt')

async function example() {
  try {
    const data = await fs.readFile(dummyTextPath, { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
example();