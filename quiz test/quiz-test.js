const questions = [
    {
        question: "Who is the most sexy person in the world ?",
        answers:[
            {text:"Ahmed", correct: false},
            {text:"Teka", correct: true},
            {text:"Heba", correct: false},
            {text:"Maram", correct: false},
        ]
    },
    {
        question: "Which is Teka's fav sport?",
        answers:[
            {text:"Football", correct: true},
            {text:"Basketball", correct: false},
            {text:"Volleyball", correct: false},
            {text:"Handball", correct: false},
        ]
    },
    {
        question: "why does everyone like Teka?",
        answers:[
            {text:"Smart", correct: false},
            {text:"Gorgeous", correct: false},
            {text:"kind", correct: false},
            {text:"friendly", correct: false},
            {text:"Select all", correct: true},
        ]
    },
    {
        question: "First wish Teka want to do ?",
        answers:[
            {text:"being lazy ", correct: false},
            {text:"leave Egypt for a good job outside", correct: true},
            {text:"Work in Egypt", correct: false},
            {text:"Nothing", correct: false},
        ]
    }
];
const questionElement =  document.getElementById("question");
const answerButtons =  document.getElementById("answer-buttons");
const nextButton =  document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach( answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display= "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct=== "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"

}

function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML= "Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex< questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();