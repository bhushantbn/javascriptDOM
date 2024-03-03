const quizDB = [
  {
    question:
      "Q1: What is the correct way to declare a variable in JavaScript?",
    a: "variable x;",
    b: "var x;",
    c: "let x;",
    d: "const x;",
    ans: "b",
  },
  {
    question:
      "Q2: Which of the following is used to add a comment in JavaScript?",
    a: "// comment",
    b: "/* comment */",
    c: "# comment",
    d: "-- comment",
    ans: "b",
  },
  {
    question: "Q3: What will be the result of `3 + '3'`?",
    a: "33",
    b: "6",
    c: "9",
    d: "Error",
    ans: "a",
  },
  {
    question: "Q4: How can you check if a variable is an array in JavaScript?",
    a: "isArray(variable)",
    b: "variable.isArray()",
    c: "typeof variable === 'array'",
    d: "Array.isType(variable)",
    ans: "a",
  }
];
const question=document.querySelector('.question')
const option1=document.querySelector('#option1')
const option2=document.querySelector('#option2')
const option3=document.querySelector('#option3')
const option4=document.querySelector('#option4')
const submitBtn=document.querySelector('#submit')
const answers=document.querySelectorAll('.answer')
const showScore=document.querySelector('#showScore')

let questionCount=0;
let score=0;
const loadQuestion=() => {
    const questionList=quizDB[questionCount]
    question.innerHTML=questionList.question
    option1.innerHTML=questionList.a
    option2.innerHTML=questionList.b
    option3.innerHTML=questionList.c
    option4.innerHTML=questionList.d

}
loadQuestion()

const getVerifyAnswer = () => {
  let answer;
  answers.forEach((element) => {
    if (element.checked) {
      answer = element.id; 
    }
  });
  return answer;
};

const deselectAll= () =>{
  answers.forEach((element)=> element.checked=false);
}

submitBtn.addEventListener('click', () => {
  const checkedAnswer = getVerifyAnswer();
  const correctAnswer = quizDB[questionCount].ans ;

  if (checkedAnswer === correctAnswer) {
    score++;
    console.log(checkedAnswer);  
  }
  
  questionCount++;
  deselectAll();

  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
      <h3>You scored ${score}/${quizDB.length} ✌️</h3>
      <button class="btn" onclick="location.reload()">Play Again</button>
    `;
    //question.classList.remove()
    
    showScore.classList.remove('scoreArea');

  }
  
});
