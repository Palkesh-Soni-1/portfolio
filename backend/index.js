const express = require("express")
const app = express();
const cors=require('cors');
app.use(cors());
const router = require('express').Router();
const bodyparser=require('body-parser');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
require("dotenv").config();
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: `${process.env.email}`,
      pass: `${process.env.pass}`,
    },
  });
  router.post("/sendemail",async (req,res)=>{
    console.log(req.body)
    const data=req.body;
    await transporter.sendMail({
        to: `${process.env.email}`, // sender address
        from: `${data.email}`, // list of receivers
        subject: `${data.name} send you a message through portfolio website`, // Subject line
        text: `${data.name}, ${data.email}, ${data.contact}`, // plain text body
      });
    await transporter.sendMail({
        from: `${process.env.email}`, // sender address
        to: `${data.email}`, // list of receivers
        subject: `Response from "Palkesh Soni"`, // Subject line
        text: `Thanks ${data.name} for contacting, I will reply you as soon as possible`, // plain text body
      });
      res.status(200).send("success");
  });
  app.use('/api',router)
  app.listen(8080,()=>{
    console.log('success')
  });