const express = require('express');

const port = 3000;
const path = require('path');
const data = require('./sample_data.json');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.use('/food', (req, res) => {
  const { selected_food } = data[Math.floor(Math.random() * data.length)];
  return res.json({ selected_food });
});

app.use('/', (req, res) => {
  return res.render('index');
});

app.listen(port, () => {
  console.log(`Random food selector application on port ${port}`);
  console.log("Data Loaded", data[0]); // to check if data is loaded
});
