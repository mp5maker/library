var nodemailer = require('nodemailer');
var fs = require('fs')

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "khan.photon@gmail.com",
        pass: ""
    }
})

var html;
fs.readFile('html/email.html', (error, data) => {
    if (error) throw error
    mailOptions = {
        from: "khan.photon@gmail.com",
        to: "khan.photon3@yahoo.com, khan.photon2@gmail.com",
        subject: "Sending Email Using Node JS",
        html: data
    }
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("Email Sent: " + info.response)
        }
    })
})
