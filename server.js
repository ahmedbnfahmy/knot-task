const express = require('express');
const app = express();
require("./DB");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoute = require('./routes/user.routes.js');
const productRoute = require('./routes/product.routes.js');
const linkSectionRoute = require('./routes/linkSection.routes.js');
const linkRoute = require('./routes/link.routes.js');



dotenv.config();
// app.use(cors({origin:true,credentials:true}))
app.use(cors())
app.use(express.json());


app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/linksection", linkSectionRoute);
app.use("/api/link", linkRoute);






app.listen(process.env.PORT || 5000, () => {
    console.log(`server listen on ${process.env.PORT}`)
})