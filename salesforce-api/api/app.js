const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: '*',
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
jsforce = require('jsforce');
require('dotenv').config();
const { oauth2 } = require('./config/config');
const routes = require('./routes/routes');
app.use('/', routes);
module.exports = app;
