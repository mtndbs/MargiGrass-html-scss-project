// Questions array
let trivia = [
  {
    question:
      "What do the colors of Mardi Gras stand for? Green is for _____, gold means______and purple symbolize",
    answers: [
      "grass , sun and flowers",
      "hope , value and richness of life",
      (id = 0),
      (id = 1),
    ],
    correct: "grass,sun and flowers",
  },
  {
    question: "What does mardi gras mean?",
    answers: ["Big party", "Fat tuesday", (id = 2), (id = 3)],
    correct: "Fat tuesday",
  },
  {
    question: "It is illegal to ride in a Mardi Gras parade without a mask?",
    answers: ["True", "False", (id = 4), (id = 5)],
    correct: "True",
  },
  {
    question: `what is mardi gras also know as in some places?`,
    answers: [`Carnival`, `Fat tuesday`, (id = 6), (id = 7)],
    correct: "Carnival",
  },
  {
    question: `True or False: mardi gras is one day?`,
    answers: [`False`, `True`, (id = 8), (id = 9)],
    correct: "False",
  },
  {
    question: `True or False: hurrican katrina cancelled mardi gras?`,
    answers: [`True`, `False`, (id = 10), (id = 11)],
    correct: "False",
  },
  {
    question: `What is the day after mardi gras?`,
    answers: [`Easter`, `Ash tuasday`, (id = 12), (id = 13)],
    correct: "Ash tuasday",
  },
  {
    question: `when does carnival start?`,
    answers: [
      `The day after mardi gras`,
      `12 days after christmas`,
      (id = 14),
      (id = 15),
    ],
    correct: "12 days after christmas",
  },
  {
    question: `What happens if you find the baby in your king's cake?`,
    answers: [
      `You have to obring the king's cake next year`,
      `You have to cook the food`,
      (id = 16),
      (id = 17),
    ],
    correct: "You have to obring the king's cake next year",
  },
  {
    question: `Which city in france is known for its mardi gras celebration?`,
    answers: [`Nice`, `Marseille`, (id = 18), (id = 19)],
    correct: "Nice",
  },
];
console.log(trivia);
let triviaRoot = document.getElementById("trivia-q");
let counter = 0;
trivia.forEach((elem, index) => {
  triviaRoot.innerHTML += ` <div class="question-div col-sm-11 col-md-8 p-4 " id="q_${index}">
  <div class="mb-3"><h5>${elem.question}</h5></div>
  <div class="form-check">
        <input class="form-check-input question" type="radio" name="radio" id="radio_${elem.answers[2]}">
        <label class="form-check-label" for="radio_${elem.answers[2]}">${elem.answers[0]}</label>
        </div>
        <div class="form-check">
        <input class="form-check-input question" type="radio" name="radio" id="radio_${elem.answers[3]}">
        <label class="form-check-label" for="radio_${elem.answers[3]}">${elem.answers[1]}</label>
        </div>
</div>`;
function correctOrNot(id,color,time,callBack){
  document.querySelector(id).style.backgroundColor = color;
  document.querySelector(id).style.transition = 'all 1s';
  setTimeout(()=>{
    document.querySelector(id).style.backgroundColor = '#a752aa';
    document.querySelector(id).style.transition = 'all 1s';

    if(callBack)callBack();
  },time)

}
function scoreJump(points) {
  let jumpDiv = document.createElement("div");
  jumpDiv.setAttribute("id", "jump-score");
  triviaRoot.appendChild(jumpDiv);
  jumpDiv.innerHTML = points;
}
function nextDiv(next, dnext) {
  document.querySelector(next).style.transition = "all 1s";
  document.querySelector(next).style.opacity = "1.0";
  document.querySelector(dnext).style.display = "block";
  document.querySelector(dnext).style.opacity = "0.5";
}
function displayScore(score) {
  setTimeout(() => {
    if (counter > 80) {
      let totalMsg = document.querySelector("#score-id");
      totalMsg.style.display = "block";
      totalMsg.innerHTML = `<h3>your score is : <span id="score-span"></span></h3>
  <h3>wow dude your are Though guy!</h3>
<div class="special-btn"><img src="/img/trivia/crown-5172631_640.png" id="result" alt="" width="130" height="86">
</div><h3>You won mardi gras CROWN!</h3>
<div><button class="btn my-btn" onclick="location.reload()">Try again</button></div>`;
      return countTo(score, "#score-span");
    } else if (counter >= 60) {
      let totalMsg = document.querySelector("#score-id");
      totalMsg.style.display = "block";
      
      totalMsg.innerHTML = `<h3>your score is : <span id="score-span"></span></h3>
      <h3>nice job!</h3>
<div class="special-btn"><img src="/img/trivia/graphic-4118995_640.png" id="result" alt="" width="120" height="96"></div><h3>You won mardi gras rare MASK!</h3>
<div><button class="btn my-btn" onclick="location.reload()">Try again</button></div>`;
      return countTo(score, "#score-span");
    } else if (counter >= 40) {
      let totalMsg = document.querySelector("#score-id");
      totalMsg.style.display = "block";
      totalMsg.innerHTML = `<h3>your score is : <span id="score-span"></span></h3>
        <h3>Keep working you're on the righ Way!</h3>
<div class="special-btn"><img src="/img/trivia/mardi-gras-5172626_640.png" id="result" alt="" width="120" height="96">
</div><h3>You recived mardi-gras simple MASK! </h3>
<div><button class="btn my-btn" onclick="location.reload()">Try again</button></div>`;
      return countTo(score, "#score-span");
    } else {
      let totalMsg = document.querySelector("#score-id");
      totalMsg.style.display = "block";

      totalMsg.innerHTML = `<h3>your score is : <span id="score-span"></span></h3>
    <h3>You must get better!</h3>
<div class="special-btn"><img src="/img/trivia/masks-4504122_640.png" id="result" alt="" width="130" height="86">
</div><h3>Dont give up!</h3>
<div><button class="btn my-btn" onclick="location.reload()">Try again</button></div>`;
      return countTo(score, "#score-span");
      // return 'hey!'
    }
  }, 1000);
}

//משתנים לטריויה
  let questions = document.querySelectorAll(".question");
  let counter = 0;
  let colorTime = 2000
  let yes = '#73e428'
  let no = 'red'
  questions.forEach((eachInput) => {
    eachInput.addEventListener("change", () => {


      // q - 0
      if (document.querySelector("#radio_0").checked) {
        correctOrNot('#q_0',yes,colorTime)
        document.querySelector("#radio_0").disabled = true;
        document.querySelector("#radio_1").disabled = true;
        counter += 10;
        document.querySelector("#q_1").style.display = "block";
        document.querySelector("#q_1").style.opacity = "1.0";
        scoreJump("+10 points!");
        nextDiv("#q_1", "#q_2");
      }
      if (document.querySelector("#radio_1").checked) {
        correctOrNot('#q_0',no,colorTime)
        document.querySelector("#radio_0").disabled = true;
        document.querySelector("#radio_1").disabled = true;
        nextDiv("#q_1", "#q_2");
        scoreJump("Maybe next time 	&#128530;");
      }

      // q-1
      if (document.querySelector("#radio_2").checked) {
        correctOrNot('#q_1',no,colorTime)
        document.querySelector("#radio_2").disabled = true;
        document.querySelector("#radio_3").disabled = true;
        nextDiv("#q_2", "#q_3");
        scoreJump("be focused ! &#128548;");
      }
      if (document.querySelector("#radio_3").checked) {
        correctOrNot('#q_1',yes,colorTime)
        document.querySelector("#radio_2").disabled = true;
        document.querySelector("#radio_3").disabled = true;
        counter += 10;
        // id_score.innerHTML = `Your score is : ` + counter;
        scoreJump("+10 points!");
        nextDiv("#q_2", "#q_3");
      }

      // q-2
      if (document.querySelector("#radio_4").checked) {
        correctOrNot('#q_2',yes,colorTime)
        document.querySelector("#radio_4").disabled = true;
        document.querySelector("#radio_5").disabled = true;
        counter += 10;
        // id_score.innerHTML = `Your score is : ` + counter;
        scoreJump("+10 points!");
        nextDiv("#q_3", "#q_4");
      }
      if (document.querySelector("#radio_5").checked) {
        correctOrNot('#q_2',no,colorTime)

        document.querySelector("#radio_4").disabled = true;
        document.querySelector("#radio_5").disabled = true;
        nextDiv("#q_3", "#q_4");
        scoreJump("did you learn? &#128548;");
      }

      // q-3

      if (document.querySelector("#radio_6").checked) {
        correctOrNot('#q_3',yes,colorTime)
        document.querySelector("#radio_6").disabled = true;
        document.querySelector("#radio_7").disabled = true;
        counter += 10;
        scoreJump("+10 points!");
        nextDiv("#q_4", "#q_5");
      }
      if (document.querySelector("#radio_7").checked) {
        correctOrNot('#q_3',no,colorTime)
        document.querySelector("#radio_6").disabled = true;
        document.querySelector("#radio_7").disabled = true;
        nextDiv("#q_4", "#q_5");
        scoreJump("maybe next time &#128553;");
      }

      // q-4
      if (document.querySelector("#radio_8").checked) {
        correctOrNot('#q_4',yes,colorTime)
        document.querySelector("#radio_8").disabled = true;
        document.querySelector("#radio_9").disabled = true;
        counter += 10;
        // id_score.innerHTML = `Your score is : ` + counter;
        scoreJump("+10 points!");
        nextDiv("#q_5", "#q_6");
      }
      if (document.querySelector("#radio_9").checked) {
        correctOrNot('#q_4',no,colorTime)
        document.querySelector("#radio_8").disabled = true;
        document.querySelector("#radio_9").disabled = true;
        nextDiv("#q_5", "#q_6");
      }

      // q-5
      if (document.querySelector("#radio_10").checked) {
        correctOrNot('#q_5',no,colorTime)
        document.querySelector("#radio_10").disabled = true;
        document.querySelector("#radio_11").disabled = true;
        nextDiv("#q_6", "#q_7");
      }
      if (document.querySelector("#radio_11").checked) {
        correctOrNot('#q_5',yes,colorTime)
        document.querySelector("#radio_10").disabled = true;
        document.querySelector("#radio_11").disabled = true;
        counter += 10;
        // id_score.innerHTML = `Your score is : ` + counter;
        scoreJump("+15 points!");
        nextDiv("#q_6", "#q_7");
      }

      // q-6
      if (document.querySelector("#radio_12").checked) {
        correctOrNot('#q_6',no,colorTime)
        document.querySelector("#radio_12").disabled = true;
        document.querySelector("#radio_13").disabled = true;
        nextDiv("#q_7", "#q_8");
        scoreJump("try again!");
      }
      if (document.querySelector("#radio_13").checked) {
        correctOrNot('#q_6',no,colorTime)
        document.querySelector("#radio_12").disabled = true;
        document.querySelector("#radio_13").disabled = true;
        counter += 15;
        scoreJump("+10 points!");
        nextDiv("#q_7", "#q_8");
      }

      // q-7
      if (document.querySelector("#radio_14").checked) {
        correctOrNot('#q_7',no,colorTime)
        document.querySelector("#radio_14").disabled = true;
        document.querySelector("#radio_15").disabled = true;
        nextDiv("#q_8", "#q_9");
        scoreJump("+0 points!");
      }
      if (document.querySelector("#radio_15").checked) {
        correctOrNot('#q_7',yes,colorTime)
        document.querySelector("#radio_14").disabled = true;
        document.querySelector("#radio_15").disabled = true;
        counter += 10;
        scoreJump("+10 points!");
        nextDiv("#q_8", "#q_9");
      }

      // q-8
      if (document.querySelector("#radio_16").checked) {
        correctOrNot('#q_8',yes,colorTime)
        document.querySelector("#radio_16").disabled = true;
        document.querySelector("#radio_17").disabled = true;
        counter += 15;
        scoreJump("+15 points!");
        nextDiv("#q_9", "#q_10");
      }
      if (document.querySelector("#radio_17").checked) {
        correctOrNot('#q_8',no,colorTime)
        document.querySelector("#radio_16").disabled = true;
        document.querySelector("#radio_17").disabled = true;
        nextDiv("#q_9", "#q_10");
      }

      // q-9
      if (document.querySelector("#radio_18").checked) {
        correctOrNot('#q_9',yes,colorTime)
        document.querySelector("#radio_18").disabled = true;
        document.querySelector("#radio_19").disabled = true;
        counter += 10;
        scoreJump("+10 points!");
        displayScore(counter);
      }
      if (document.querySelector("#radio_19").checked) {
        document.querySelector("#q_9").style.backgroundColor = "red";
        document.querySelector("#radio_18").disabled = true;
        document.querySelector("#radio_19").disabled = true;
        displayScore(counter);
      }
    });
  });
});
// opacity for the second div,
document.querySelector("#q_1").style.opacity = "0.5";

function countTo(mySum, id) {
  let from = 0;
  let to = mySum;
  let step = to > from ? 1 : -1;
  let interval = mySum;
  if (from == to) {
    document.querySelector(id).textContent = from;
    return;
  }
  let counter = setInterval(function () {
    from += step;
    document.querySelector(id).textContent = from;
    if (from == to) {
      clearInterval(counter);
    }
  });
}
