
const express= require('express')
const bodyParser=require('body-parser')
const axios= require('axios');
// const  {exphbs}= require('express-handlebars')
const ejs= require('ejs')
const dotenv =require('dotenv').config
 const path = require('path')
const nodemailer=require('nodemailer');
const  connectDB= require('./mongodb')
// const { log } = require('console');


const app = express();

// view engine

// app.engine('handlebars' , exphbs())
// app.set('view engine', 'handlebars');
app.set('view engine', 'ejs')
// app.use(express.urlencoded({extended:false}))

//static
app.use('/public', express.static(path.join(__dirname,'public')));

// body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/', (req,res)=>{

    res.render('contact');
});

app.post('/compose',(req,res)=>{
    console.log(req.body); 
})
//     const output = `
//     <p> You have a new email </p>
//     <h3> Email details </h3>
//     <ul>
//     <li>To: ${req.body.email}</li>
//     <li>subject: ${req.body.subject}</li>
//     <li>compose: ${req.body.compose}</li>
   
//     </ul>
//     `


// //    nodemailer

// // Create a transporter object using the default SMTP transport
// const transporter = nodemailer.createTransport({
//   service: 'Gmail', // Replace with your SMTP server details
//   auth: {
//     user: process.env.EMAIL, // Replace with your email address
//     pass: process.env.PASSWORD // Replace with your email password
//   }
// });

// // Define email content
// const mailOptions = {
//   from: 'plangshak07@gmail.com', // Sender address
//   to: req.body.email, // List of recipients
//   subject: req.body.subject, // Subject line
//   html: output // Plain text body
// };

// // Send the email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error('Error sending email:', error);
//   } else {
//     console.log('Email sent:', info.response);
//   }
//   res.render('contact')
// });


// check mail

app.get('/checkMail', (req,res)=>{
    res.render('checkMail')
})

//route for inbox page
app.get('/inbox', (req,res)=>{
    res.render('inbox')
})

//route for register
app.get('/register', (req,res)=>{
    res.render('register')
})

//route for command page
app.get('/command', (req,res)=>{
    res.render('command')
})

//route for login page
app.get('/login', (req,res)=>{
    res.render('login')

    console.log('successful');
})





app.listen(3000,()=> console.log('server started.....'))



