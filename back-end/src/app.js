const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const AnswerController = require('./controller/AnswerController');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', AnswerController.getTotal);
app.post('/answer', AnswerController.answerTreatment);

module.exports = app;