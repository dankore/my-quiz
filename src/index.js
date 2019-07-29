import "./styles.css";

const questionsHolder = document.querySelector(".questions");
const optionsHolder = document.querySelector(".options-container");
const showRightOrWrongContainer = document.querySelector(
  ".show-right-wrong-container"
);
const nextQuestionButton = document.querySelector(".next-question");

//Global event listeners
nextQuestionButton.addEventListener("click", nextQuestion);

let eachBundle, currentIndex;

const quizBundle = [
  {
    question: ["What is a life"],
    options: [{ text: "a", correct: true }, { text: "b", correct: false }]
  },
  {
    question: ["What is water?"],
    options: [{ text: "c", correct: true }, { text: "d", correct: false }]
  }
];

currentIndex = 0;
eachBundle = quizBundle.sort(() => Math.random() - 0.5);

function start() {
  location.reload();
}

function nextQuestion() {
  currentIndex++;
  showRightOrWrongContainer.classList.add("hide");
  while (optionsHolder.firstChild) {
    optionsHolder.removeChild(optionsHolder.firstChild);
  }
  if (currentIndex >= eachBundle.length) {
    start();
  }
  show(eachBundle[currentIndex]);
}

//
function show() {
  questionsHolder.innerHTML = eachBundle[currentIndex].question;
  eachBundle[currentIndex].options.forEach(option => {
    // Creat a button
    const button = document.createElement("button");
    // Style the button
    button.classList.add("btn");
    //Add the options to insdie of the button
    button.innerText = option.text;
    //Add the buttons inside the options container
    optionsHolder.appendChild(button);
    //Add event lister
    button.addEventListener("click", e => {
      showRightOrWrongContainer.classList.remove("hide");
      //Choose clicked button
      const answers = option.correct;

      if (answers === true) {
        showRightOrWrongContainer.innerText = "Correct";
        showRightOrWrongContainer.style.color = "green";
      } else {
        showRightOrWrongContainer.innerText = "False";
        showRightOrWrongContainer.style.color = "#cc3300";
      }
      nextQuestionButton.classList.remove("hide");
    });
  });
}
show();
