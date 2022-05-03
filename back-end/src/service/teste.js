const fs = require('fs-extra');

const file = 'src/files/answers.txt';

const read = () => {
  const answer = fs.readFileSync(file, 'utf8');
  return answer;
}

console.log(read());