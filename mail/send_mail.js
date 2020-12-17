const nodemailer = require("nodemailer");

var sender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hbahire2014@gmail.com",
    pass: "HitsSakshi95...",
  }
});

var receiver = {
  from: "hbahire2014@gmail.com",
  to: "jadhavpanka500@gmail.com",
  // to: "jadhavpanka500@gmail.com, tejudhonge12@gmail.com",
  subject: "Node.js trial.",
  //text: "hellow hv a nice day .....!!!!",
  htm: '<h1> Wel-Come </h1>',
};

sender.sendMail(receiver, function (err, info) {
  if (err)
    console.log(err)
  else
    console.log("Email sent : ", info.response);
});
