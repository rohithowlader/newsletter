import express from "express";

//Encoding
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Created an express server
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send(`Running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`App is running on port : ${PORT}`);
});
