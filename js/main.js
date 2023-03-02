"use strict";

// The questions and answers for the quiz

var gQuest = [
  {
    id: 1,
    question: "Who created Solana?",
    answers: ["Charlie Lee", "Anatoly Yakovenko", "Vitalik Buterin"],
    correctOptIndex: 1,
  },
  {
    id: 2,
    question: "What is Cosmos Blockchain?",
    answers: [
      "A decentralized network of independent parallel blockchains",
      "A high-performance blockchain supporting builders around the world",
      "A decentralized, open-source blockchain with smart contract functionality",
    ],
    correctOptIndex: 0,
  },
  {
    id: 3,
    question: "What Blockchain Polygon support?",
    answers: ["Ripple", "Polkadot", "Etherum"],
    correctOptIndex: 2,
  },
];

// The current question index
var gCurrQuestIdx = 0;

// The audio element for the victory sound effect
var gVictorySound = new Audio("audio/victory.mp3");

// Initialize the quiz
onInit();

function onInit() {
  // Render the first question
  renderQuestion();
}

function renderQuestion() {
  // Get the image element and set its source to the current question image
  var elImg = document.querySelector(".container img");
  elImg.src = `./img/${gQuest[gCurrQuestIdx].id}.jpg`;

  // Get the question element and set its text to the current question
  var elQuestion = document.querySelector(".container h2");
  elQuestion.innerHTML = gQuest[gCurrQuestIdx].question;

  // Get the answers for the current question and generate HTML for each answer
  var gAnswers = gQuest[gCurrQuestIdx].answers;
  var strHTML = "";
  for (var i = 0; i < gAnswers.length; i++) {
    strHTML += `<div class="answer answer${i}" onclick="checkAnswer(${i})">${gAnswers[i]}</div>`;
  }

  // Get the answers container element and set its HTML to the generated answers HTML
  var elAnswers = document.querySelector(".answers");
  elAnswers.innerHTML = strHTML;
}

function checkAnswer(answerIdx) {
  var trueIdx = gQuest[gCurrQuestIdx].correctOptIndex;

  if (answerIdx === trueIdx) {
    gCurrQuestIdx++;
  } else {
    // Display a message indicating that the user clicked on the wrong question
    var message = "Sorry, that's not the correct answer. Please try again.";
    alert(message);
  }

  if (gCurrQuestIdx === gQuest.length) {
    showVictory();
  }

  renderQuestion(gCurrQuestIdx);
}

function showVictory() {
  // Get the victory image element and show it
  var elVictoryImg = document.querySelector(".victory-container");
  elVictoryImg.classList.add("show");

  // Get the answers container element and hide it
  var elAnswers = document.querySelector(".answers");
  elAnswers.classList.add("hide");

  // Play the victory sound effect
  gVictorySound.play();
}
