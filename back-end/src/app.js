const express = require('express');
const cors = require('cors');
const AnswerController = require('./controller/AnswerController');

const app = express();
app.use(cors());

app.get('/', AnswerController.answerTreatment);

module.exports = app;