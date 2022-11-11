const express = require('express');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/product');
const bodyParser = require('body-parser');

const app = express();
const db = require("./util/database");



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(productRoutes);

app.listen(3000);