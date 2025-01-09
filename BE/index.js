const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());


app.use('/api/countries', require('./routes/countries'));


app.listen(3001, () => {
    console.log(`Server listening on port: 3001`)
})
