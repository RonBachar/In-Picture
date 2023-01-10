"use strict";

// gCurrQuestId = 0 => render the first question from gQuest

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

var gCurrQuestIdx = 0;
var gVictorySound = new Audio("audio/victory.mp3");

onInIt();
function onInIt() {
  renderQuestion();
}

function renderQuestion() {
  var elImg = document.querySelector(".container img");

  elImg.src = `/In Picture/img/${gCurrQuestIdx + 1}.jpg`;

  var elQuestion = document.querySelector(".container h2");
  var gQuestion = gQuest[gCurrQuestIdx].question;

  elQuestion.innerHTML = gQuestion;

  var gAnswers = gQuest[gCurrQuestIdx].answers;

  var strHTML = "";

  for (let i = 0; i < gAnswers.length; i++) {
    const currAnswer = gAnswers[i];
    strHTML += ` <div class="answer answer${i}" onclick="checkAnswer(${i})">${currAnswer}</div>
    `;
  }

  var elAnswers = document.querySelector(".answers");
  elAnswers.innerHTML = strHTML;
}

function checkAnswer(answerIdx) {
  var trueIdx = gQuest[gCurrQuestIdx].correctOptIndex;

  if (answerIdx === trueIdx) {
    gCurrQuestIdx++;
  } else {
    console.log("false");
  }

  if (gCurrQuestIdx === gQuest.length) {
    showVictory();
  }

  renderQuestion(gCurrQuestIdx);
}

function showVictory() {
  var elVictoryImg = document.querySelector(".victory-container");
  elVictoryImg.classList.add = "show";

  var elAnswers = document.querySelector(".answers");
  elAnswers.classList.add = "hide";

  gVictorySound.play();
}
