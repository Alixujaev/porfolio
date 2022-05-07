const express = require('express');
const path = require('path');
const app = express();
const mongoose = require("mongoose");
const {MONGO_URI} = require('./keys/index')
const port = process.env.PORT || 5000;
mongoose.connect(MONGO_URI, () => console.log('MongoDb ga ulandik'))
const cors = require("cors");
require("./models/Message")
require("./models/Skills")
require("./models/Works")

const corsOptions ={
   origin:'*', 
   credentials:true,           
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())
   
app.use(require("./routes/message"))
app.use(require('./routes/skill'))
app.use(require('./routes/work'))

if(process.env.NODE_ENV === "production"){
   app.use(express.static("client/build"))
   app.get("*", (req, res) => {
     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
   })
 }


app.listen(port, () => console.log(`Server has been started on port ${port}`))