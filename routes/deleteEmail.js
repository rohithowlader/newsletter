import express from "express";
import recipient from "../models/recipient.js";
let deleteEmail = express.Router();

deleteEmail.delete("/v1.0/recipient", async (req, res) => {
  try {
    let { email } = req.body;

    const recipientFind = await recipient.findOne({ email: email });

    if (!recipientFind) {
      return res.status(404).json({ message: "Invalid entry" });
    }

    const deleteEntry = await recipient.findOneAndDelete({ email });

    return res.status(200).json({
      messsage: `Email Unsubscribed to newsletter`,
    });
  } catch (e) {
    console.log(e);
  }
});

export default deleteEmail;
