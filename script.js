const question = [
    {
        questions:" which is largest animal in the world?",
        answers:[
            { text: "elephant", correct: false},
            { text: "blue whale", correct: true},
            { text: "giraffe", correct: false},
            { text: "shark", correct: false}
        ]
    },
    {
        questions:"Name the first man to wall on the moon?",
        answers:[
          {text: "william armstrong",correct: false},
          {text: "jon armstrong",correct: false},
          {text: "neil Armstrong",correct: true},
          {text: "neil william",correct: false}
        ]
    },
    {
        questions:"which animal is known as the ship of the desert?",
        answers:[
          {text: "tiger",correct: false},
          {text: "giraffe",correct: false},
          {text: "lion",correct: false},
          {text: "camel",correct: true}
        ]
    },
    {
        questions:"Name the smallest continent?",
        answers:[
          {text: "asia",correct: false},
          {text: "australia",correct: true},
          {text: "europe",correct: false},
          {text: "antarctica",correct: false}
        ]
    },
    {
        questions:"which is the tallest mountain in the world",
        answers:[
          {text: "mount Everest",correct: true},
          {text: "Kangchenjunga",correct: false},
          {text: "cho oyo",correct: false},
          {text: "denali",correct: false}
        ]
    }
]


const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-button");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuize(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "next";
    showQuestion();
}

function showQuestion(){
    answerBtn.innerHTML = "";
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo+ "." + currentQuestion.questions;

    currentQuestion.answers.forEach(answers =>{
        const  button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener('click',selectAnswer)
    })
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";

    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }
    else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";

}
function showScrore(){
    // resetState();
    answerBtn.innerHTML = "";

    questionElement.innerHTML = `you scores ${score} out of ${question.length}!`;
    nextBtn.innerHTML  = "Play Again";
    nextBtn.style.display='block'
}

function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < question.length){
        showQuestion();
    }
    else{
        showScrore();
    }
}

nextBtn.addEventListener('click',() => {
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }
    else{
        startQuize();
    }
})

startQuize();



