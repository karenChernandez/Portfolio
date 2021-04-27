require('dotenv').config();
const express = require('express');
const massive = require('massive');
const path = require('path');
const nodemailer = require('nodemailer');
const { getMaxListeners } = require('process');
const app = express();

// Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')))

const { CONNECTION_STRING, SERVER_PORT, EMAIL, PASS } = process.env;

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
    .then((db) => {
        // app.set('db', db)
        // db.init()
        // console.log('CONNECTED TO BD!')
    })
    .catch((err) => console.log(err));

app.post('/api/sendEmail', (req, res) => {
    console.log('req.body', req.body);
    const mail = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
        <li>Subject: ${req.body.subject}</li>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message:</h3>
         <p>${req.body.text}</p>
        `;
    //  console.log('mail', mail)
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        secure: false, // true for 465, false for other ports
        auth: {
            user: EMAIL, // generated ethereal user
            pass: PASS // generated ethereal password
        }
        // logger: true,
    });

    // send mail with defined transport object
    transporter.sendMail(
        {
            from: '"Nodemailer Contact 👻" <karenChernande@live.com>', // sender address
            to: 'jollacoco7@gmail.com', // list of receivers
            subject: 'Nodemailer contact request✔', // Subject line
            text: 'Test!!!', // plain text body
            html: mail // html body
        },
        (err, data) => {
            if (err) {
                res.json({
                    status: 'fail'
                });
            } else {
                res.json({
                    status: 'Email send successfully!'
                });
            }
        }
    );

    // console.log('info?', info)
});

//this is to host app!
app.use(express.static(`${__dirname}/../build`))
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname,'../build/index.html'))
})


app.listen(SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`));
