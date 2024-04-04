const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const kumbhRouter=require('./routes/kumbhRouter');
const adminRouter=require('./routes/adminRouter')
const customerRouter=require('./routes/customerRouter')

const port = process.env.PORT || 5000;

require("dotenv").config();

const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("The Maha Kumbh");
});

app.use('/api/v1/kumbh',kumbhRouter)
app.use('/api/v1/user',adminRouter)
app.use('/api/v1/customer',customerRouter)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
