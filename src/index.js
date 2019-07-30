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

const startButtonFunction = () => {
  eachBundle = quizBundle.sort();
  currentIndex = 0;
  quizContainer.classList.remove("hide");
  startButton.classList.add("hide");
  nextQuestion();
};
startButton.addEventListener("click", startButtonFunction);

const nextQuestion = () => {
  showRightOrWrongContainer.classList.add("hide");
  reset();
  if (currentIndex < quizBundle.length) {
    show(eachBundle[currentIndex]);
    currentIndex++;
  } else {
    quizContainer.classList.add("hide");
    startButton.classList.remove("hide");
  }
  // Show progress
  currentQuestionNumber.innerText = currentIndex;
  totalQuestions.textContent = quizBundle.length;
};
nextQuestionButton.addEventListener("click", nextQuestion);

const show = () => {
  questionsHolder.innerText = eachBundle[currentIndex].question;

  eachBundle[currentIndex].options.forEach(option => {
    const button = document.createElement("input");
    button.type = "checkbox";
    button.id = "options";
    const label = document.createElement("label");
    label.htmlFor = "options";
    label.appendChild(document.createTextNode(option.text));
    label.classList.add("label");

    button.classList.add("btn");
    optionsHolder.appendChild(button);
    optionsHolder.appendChild(label);
    console.log(option.correct);
    button.addEventListener("click", () => {
      const answer = option.correct;
      if (answer === true) {
        showRightOrWrongContainer.classList.remove("hide");
        showRightOrWrongContainer.innerText = "Correct";
        showRightOrWrongContainer.style.color = "green";
      } else {
        showRightOrWrongContainer.classList.remove("hide");
        showRightOrWrongContainer.style.color = "red";
        showRightOrWrongContainer.innerText = "Wrong";
      }
    });
  });
};
const reset = () => {
  while (optionsHolder.firstChild) {
    optionsHolder.removeChild(optionsHolder.firstChild);
  }
};

// const show = bundle => {
//   questionsHolder.innerText = eachBundle[currentIndex].question;

//   eachBundle[currentIndex].options.forEach(option => {
//     const button = document.createElement("button");
//     button.innerText = option.text;
//     button.classList.add("btn");
//     optionsHolder.appendChild(button);
//     console.log(option.correct);
//     button.addEventListener("click", () => {
//       const answer = option.correct;
//       if (answer === true) {
//         showRightOrWrongContainer.classList.remove("hide");
//         showRightOrWrongContainer.innerText = "Correct";
//         showRightOrWrongContainer.style.color = "green";
//       } else {
//         showRightOrWrongContainer.classList.remove("hide");
//         showRightOrWrongContainer.style.color = "red";
//         showRightOrWrongContainer.innerText = "Wrong";
//       }
//     });
//   });
// };
// const reset = () => {
//   while (optionsHolder.firstChild) {
//     optionsHolder.removeChild(optionsHolder.firstChild);
//   }
// };

const quizBundle = [
  {
    question: ["What is a life"],
    options: [{ text: "a", correct: true }, { text: "b", correct: false }]
  },
  {
    question: ["What is water?"],
    options: [{ text: "c", correct: true }, { text: "d", correct: false }]
  },
  {
    question: ["What is a me?"],
    options: [
      { text: "apple", correct: true },
      { text: "ornage", correct: false }
    ]
  },
  {
    question: ["What is er?"],
    options: [
      { text: "cat", correct: true },
      { text: "elephant", correct: false }
    ]
  }
];
