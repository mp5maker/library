const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')
const fs = require("fs")

const trim = (str) => str.replace(/^\s+|\s+$/g, '')
const delay = (delayInMs) => new Promise((resolve) => setTimeout(resolve, delayInMs))

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const performAction  = async ({ pathname, url }) => {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)
    const writeStream = fs.createWriteStream(pathname)
    const data = $('.hoverable-block .data-row').get().map((item) => {
      const element = $(item)
      const productName = trim(element.find(".data-row-top").text())
      const productTitle = trim(element.find(".data-row-strength .grey-ligten").text())
      const productCategory = trim(element.find("div:nth-child(3)").text())
      const productSubtitle = trim(element.find(".data-row-company").text())
      return {
        productName,
        productTitle,
        productCategory,
        productSubtitle
      }
    })
    const content = JSON.stringify(data)
    writeStream.write(content);
    writeStream.on('finish', () => {
      console.log('wrote all data to file')
    })
    writeStream.end()
  } catch(error) {
    console.debug(error)
  }
}


const website = "https://medex.com.bd/brands";

const recursive = async (page) => {
  if (page <= 0) return
  const url = `${website}?page=${page}`
  const pathname = path.join(__dirname, `basics/dummy/product_page_${page}.json`)
  await performAction({ pathname, url })
  await delay(getRandomInt(4000, 10000))
  recursive(page - 1)
}


const pages = 736
recursive(pages)