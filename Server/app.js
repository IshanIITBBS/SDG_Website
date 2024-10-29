const express = require('express');
const path = require('path') ;
const app = express();
const rootdir = path.dirname(require.main.filename) ;
const main = require('./routes/main.js') ;
app.use(express.urlencoded({ extended: false }));

app.use(main);

app.listen(3000);