const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  if (req.query.name) {
    res.send(`Hello, ${req.query.name}`);
  } else {
    res.send('Hello, stranger');
  }
});

app.listen(8000, () => console.log('Server ready on port 8000.'));

module.exports = app;
