const fs = require('fs-extra');

const answerTreatment = () => {
  // const { question1, question2, question3, question4 } = answer;
  const answer = JSON.parse(fs.readFileSync('src/files/answers.txt', 'utf8'));
  console.log(answer)
  return answer;
};

module.exports = {
  answerTreatment,
}
