const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const SECRET = process.env.SECRET || 'mysecret';
app.use(express.json());
let users = [];

function authenticate(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.post('/login', (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

app.post('/users', authenticate, (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
