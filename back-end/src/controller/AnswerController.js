const AnswerService = require('../service/AnswerService');

const answerTreatment = (req, res) => {
  const userAnswer = req.body;
  const answer = AnswerService.answerTreatment(userAnswer);
  res.status(200).json(answer.total);
};

module.exports = {
  answerTreatment,
};