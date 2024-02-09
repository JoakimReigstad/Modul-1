let lastAnswerIndex = -1;

let answers = [
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Signs point to yes',
  'Reply hazy, try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'My reply is no',
  'Don\'t count on it',
  'My sources say no',
  'Outlook not so good?',
  'Very doubtful', 
  'Does a one-legged duck swim in a circle?'
];

let displayAnswer = function() {
  let index;
  do {
    index = Math.floor(Math.random() * answers.length);
  } while (index === lastAnswerIndex);
  
  lastAnswerIndex = index;

  let answer = answers[index];
  let answerElement = document.getElementById('answerText');
  answerElement.innerText = answer;
}; 
