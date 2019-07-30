import "./styles.css";

const quizContainer = document.querySelector(".quiz-container");
const questionsHolder = document.querySelector(".questions");
const optionsHolder = document.querySelector(".options-container");
const showRightOrWrongContainer = document.querySelector(
  ".show-right-wrong-container"
);
const nextQuestionButton = document.querySelector(".next-question");
const currentQuestionNumber = document.querySelector(".current");
const totalQuestions = document.querySelector(".total");
const startButton = document.querySelector(".start-button");

let eachBundle, currentIndex;

const start = () => {
  eachBundle = quizBundle.sort();
  currentIndex = 0;
  quizContainer.classList.remove("hide");
  startButton.classList.add("hide");
  nextQuestion();
};
startButton.addEventListener("click", start);

const nextQuestion = () => {
  reset();
  if (currentIndex < quizBundle.length) {
    show(eachBundle[currentIndex]);
    currentIndex++;
  } else {
    quizContainer.classList.add("hide");
    startButton.classList.remove("hide");
  }
  console.log(currentIndex, quizBundle.length);
};
nextQuestionButton.addEventListener("click", nextQuestion);

const show = bundle => {
  questionsHolder.innerText = eachBundle[currentIndex].question;

  eachBundle[currentIndex].options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.classList.add("btn");
    optionsHolder.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
};
const reset = () => {
  while (optionsHolder.firstChild) {
    optionsHolder.removeChild(optionsHolder.firstChild);
  }
};

const selectAnswer = e => {
  const selectedButton = e.target;
  const answer = selectedButton.corret;
};
const quizBundle = [
  {
    question: ["What is a life"],
    options: [{ text: "a", correct: true }, { text: "b", correct: false }]
  },
  // {
  //   question: ["What is water?"],
  //   options: [{ text: "c", correct: true }, { text: "d", correct: false }]
  // }
  {
    question: ["What is a me?"],
    options: [
      { text: "apple", correct: true },
      { text: "ornage", correct: false }
    ]
  }
  // {
  //   question: ["What is er?"],
  //   options: [
  //     { text: "cat", correct: true },
  //     { text: "elephant", correct: false }
  //   ]
  // }
];
