const express = require('express');
const app = express();
const main = require('./routes/main.js') ;
const cors = require('cors');

app.use(cors());
app.use(express.json());  
app.use(express.urlencoded({ extended: false }));




app.use(main);

app.listen(5000);