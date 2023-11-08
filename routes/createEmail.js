import express from "express";
import recipient from "../models/recipient.js";
import { v4 as uuidv4 } from "uuid";

let createEmail = express.Router();

createEmail.post("/v1.0/recipient/", async (req, res) => {
  try {
    let { email } = req.body;
    const recipientFind = await recipient.findOne({ email: email });

    //NimapInfotech
    if (recipientFind) {
      return res
        .status(409)
        .json({ message: `Email ${email} Already Present` });
    }
    if (!recipientFind) {
      let uuidGenerate = uuidv4();
      const recipients = new recipient({
        uuid: uuidGenerate,
        email: email,
        date: Date.now(),
      });
      var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (email !== "" && email.match(emailFormat)) {
        const response = await recipients.save();
        return res.status(200).json({
          messsage: `Email ${response.email} Created`,
        });
      } else {
        return res.status(200).json({
          messsage: `Email ${email} Invalid`,
        });
      }
    }
  } catch (e) {
    console.log(e);
  }
});

export default createEmail;
