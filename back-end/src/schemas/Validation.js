const question1And2Validation = (question, userAnswer) => {
  if (question === "Sim") {
    userAnswer.qtyPositive += 1;
  } else {
    userAnswer.qtyNegative += 1;
  }
  return userAnswer;
};

const question3Validation = (question, userAnswer) => {
  if (question === "Sim") {
    userAnswer.qtyPositive += 1;
  } else if (question === "Não") {
    userAnswer.qtyNegative += 1;
  } else if (question === "Não sei") {
    userAnswer.qtyNonAvailable += 1;
  } else {
    userAnswer.qtyPositive += 1;
  }
  return userAnswer;
};

module.exports = {
  question1And2Validation,
  question3Validation,
};