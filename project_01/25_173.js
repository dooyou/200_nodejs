const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service : 'Gmail',
  auth : {
    user: '지메일아이디@gmail.com',
    pass: '비밀번호',
  },
});

const mailOptions = {
  from: '지메일아이디@gmail.com', // sender address
  to: '지메일아이디@gmail.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Message sent : ${info.response}`);
  }
  transporter.close();
});
