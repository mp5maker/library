const axios = require('axios')
const cheerio = require('cheerio')

const onSuccess = (response) => {
    const $ = cheerio.load(response.data)
    const siteHeading = $(".header-container .header-content-left .title");
    console.log("onSuccess -> siteHeading html()", siteHeading.html())
    console.log("onSuccess -> siteHeading text()", siteHeading.text())
}

const onError = (error) => { console.log(error)}

axios.get("https://photons-blog.netlify.app/")
    .then(onSuccess)
    .catch(onError)