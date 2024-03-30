const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Express on Vercel'));

app.post('/api', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Name is required' });
  }
  res.json({ message: `Hello, ${name}` });
});

app.listen(8000, () => console.log('Server ready on port 8000.'));

module.exports = app;
