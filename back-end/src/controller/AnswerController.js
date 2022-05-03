const AnswerService = require('../service/AnswerService');

const answerTreatment = (req, res) => {
  // const { answer } = req.body;
  const answer = AnswerService.answerTreatment();
  res.status(200).json(answer);
};

module.exports = {
  answerTreatment,
};