const express = require("express");
const handleCorsPolicy = require("./utils/cors");
const mongoose = require('mongoose')
const userRouter = require("./routes/users");
const homeRouter = require("./routes/home");
const authRouter = require("./routes/auth");
require('dotenv').config()

const port = process.env.HOST_PORT || 5000

//connect to mongoDB
const dbURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.amewz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err))


const app = express();

app.use(express.json());
app.use(handleCorsPolicy);

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/", homeRouter);