const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log(`connected to knot-task`);
}).catch((err)=>{
    console.log(err);
})
exports.mongoose;