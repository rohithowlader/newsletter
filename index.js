import express from "express";
import connectDB from "./Config/DB.js";
import createEmail from "./routes/createEmail.js";
connectDB();
//Encoding
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", createEmail);

//Created an express server
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send(`Running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`App is running on port : ${PORT}`);
});
