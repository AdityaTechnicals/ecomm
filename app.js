const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const cors = require('cors');
dotenv.config({ path: './config.env' })
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json())
app.use(bodyparser.urlencoded({ extended:true }));
app.use(require('./routes/route'))
if(process.env.NODE_ENV == 'production'){
    app.use(express.static("./client/build"))
}
app.listen(port, () => {
    console.log(`listing on http://localhost:${port}`)
})