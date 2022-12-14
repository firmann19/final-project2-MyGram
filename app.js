require("dotenv").config();
const express = require("express");
const app = express();
const userRoute = require("./routers/userRoute");
const photoRoute = require("./routers/photoRoute");
const socialMediaRoute = require("./routers/socialMediaRoute");
const commentRoute = require("./routers/commentRoute");
const PORT = process.env.PGPORT;

app.get('/', (req,res) => {
  res.status(200).json({message:"final project 2 tim 4"})
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(userRoute);
app.use(photoRoute);
app.use(socialMediaRoute);
app.use(commentRoute);

 app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

module.exports = app;
