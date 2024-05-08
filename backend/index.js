const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const morgan = require('morgan')

require('dotenv').config()


const productRoute = require('./routes/getProducts');


const PORT = 8081

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api/getProducts/',productRoute);

app.listen(PORT || 3000, () => {
  console.log(`SERVER : http://localhost:${PORT}`);
})