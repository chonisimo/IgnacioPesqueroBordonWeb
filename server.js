const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const homeRouter = require('./routes/home');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use('/public', express.static('public'));

app.use('/', homeRouter);

app.listen(process.env.PORT || 4002, console.log('servidor andando'));