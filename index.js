const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const PORT = 3000;
const SECRET = 'mysecret';
app.use(express.json());
let users = [];
