import express from "express";
import connectDB from "./Config/DB.js";
import createEmail from "./routes/createEmail.js";
import deleteEmail from "./routes/deleteEmail.js";
import nodemailer from "nodemailer";
connectDB();
//Encoding
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", createEmail);
app.use("/", deleteEmail);

//Created an express server
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send(`Running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`App is running on port : ${PORT}`);
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
    // clientId: process.env.CLIENT_ID,
    // clientSecret: process.env.CLIENT_SECRET,
    // refreshToken: process.env.REFRESH_TOKEN
  },
});
const mailConfigurations = {
  from: `verifymail422@gmail.com`,
  to: `rohithowlader2017@gmail.com`,
  subject: `File shared by `,
  text: `Hi! you have subscribed to our newsletter`,
};
transporter.sendMail(mailConfigurations, function (error, info) {
  if (error) throw Error(error);
  console.log("Email Sent Successfully");
});
