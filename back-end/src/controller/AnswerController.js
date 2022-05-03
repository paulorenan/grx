const AnswerService = require('../service/AnswerService');

const answerTreatment = (req, res) => {
  const userAnswer = req.body;
  const answer = AnswerService.answerTreatment(userAnswer);
  res.status(200).json(answer.total);
};

const getTotal = (_req, res) => {
  const total = AnswerService.getTotal();
  res.status(200).json(total);
};

module.exports = {
  answerTreatment,
  getTotal,
};