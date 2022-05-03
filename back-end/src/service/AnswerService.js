const fs = require('fs-extra');
const Validation = require('../schemas/Validation');

const answerTreatment = (userAnswer) => {
  const { question1, question2, question3 } = userAnswer;
  const answer = {
    qtyPositive: 0,
    qtyNegative: 0,
    qtyNonAvailable: 0,
  };
  const validation1 = Validation.question1And2Validation(question1, answer);
  const validation2 = Validation.question1And2Validation(question2, validation1);
  const validation3 = Validation.question3Validation(question3, validation2);
  const answerWithValidation = {
    ...userAnswer,
    ...validation3,
  };
  const answers = JSON.parse(fs.readFileSync('src/files/answers.txt', 'utf8'));
  const concatAnswers = {
    total: {
      positive: answers.total.positive + answerWithValidation.qtyPositive,
      negative: answers.total.negative + answerWithValidation.qtyNegative,
      nonAvailable: answers.total.nonAvailable + answerWithValidation.qtyNonAvailable,
    },
    answers: [...answers.answers, answerWithValidation],
  }
  fs.writeFileSync('src/files/answers.txt', JSON.stringify(concatAnswers));
  return concatAnswers;
};

module.exports = {
  answerTreatment,
}
