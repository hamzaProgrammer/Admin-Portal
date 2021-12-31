const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})
require('./db/conn')
var port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.use(express.json())

// adding routes
app.use(require('./routes/AuthRoutes')) 
app.use(require('./routes/CategoryRoutes'))
app.use(require('./routes/ProductsRoutes'))
// app.use(require('./routes/categoriesRoute'))
// app.use(require('./routes/cartRoutes'))
// app.use(require('./routes/BrandsRoutes'))


app.listen( process.env.PORT || 8080, (req, res) => {
    console.log(`Express Server Running at ${port}`)
})