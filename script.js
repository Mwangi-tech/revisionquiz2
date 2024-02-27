const startingMinutes = 60;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}


const questions = [
    {
        question: "Wambua's piece of land measures 8000cm by 50m. Calculate the area of the land in SI units",
        answers: [
            {text: "4000000", correct: false},
            {text: "400000", correct: false},
            {text: "4000", correct: true},
            {text: "400", correct: false},
            
        ]
    },
    {
        question: "Which of the following solutions is wrongly matched with its effect on the litmus paper?",
        answers: [
            {text: "Wood ash solution - Blue litmus paper remains blue", correct: false},
            {text: "Lemon juice - Turns blue litmus paper to red", correct: false},
            {text: "Orange solution - Turns red litmus paper to blue", correct: true},
            {text: "Soap solution - Turns red litmus paper to blue", correct: false},
            
        ]
    },
    {
        question: "Milly found out that her carton box for putting litter was 40cm long, 50cm wide and 60cm high. What was the volume of the box in SI units?",
        answers: [
            {text: "0.0012", correct: false},
            {text: "0.012", correct: false},
            {text: "0.12", correct: true},
            {text: "120,000", correct: false},
            
        ]
    },
   
    
    {
        question: "The following are common laboratory hazards EXCEPT?",
        answers: [
            {text: "Open electrical sockets", correct: false},
            {text: "Corrosive chemicals", correct: false},
            {text: "Flammable chemicals", correct: false},
            {text: "Clean, dry and well maintained floors", correct: true},
            
        ]
    },
    
   
    {
        question: "A hazard is anything that has the potential to cause harm or injure someone. Among the following, Which one is NOT a hazard?",
        answers: [
            {text: "Open flames", correct: false},
            {text: "Slippery floor", correct: false},
            {text: "Open electrical sockets", correct: false},
            {text: "Glass equipment", correct: true},
            
        ]
    },
    

    {
        question: "Convert 0.057g/cm³ to the SI units",
        answers: [
            {text: "57", correct: true},
            {text: "570", correct: false},
            {text: "5700", correct: false},
            {text: "5.7", correct: false},
            
        ]
    },
    {
        question: "Which one of the following is NOT a basic quantity?",
        answers: [
            {text: "Length", correct: false},
            {text: "Density", correct: true},
            {text: "Temperature", correct: false},
            {text: "Mass", correct: false},
            
        ]
    },
    {
        question: "During an experiment, Grade 7 learners realised that an object had a mass of 10g and a volume of 200cm³. What was the density of the object in SI units?",
        answers: [
            {text: "0.05", correct: false},
            {text: "0.5", correct: false},
            {text: "5", correct: false},
            {text: "50", correct: true},
            
        ]
    },
    {
        question: "Which of the following component is wrongly matched with its function?",
        answers: [
            {text: "Plasters - They are used to cover small wounds to keep away germs", correct: false},
            {text: "Bandages - They kill and keep away germs", correct: true},
            {text: "Cotton wool - They clean wounds, cuts and bruises", correct: false},
            {text: "Antiseptics - They are used for killing germs that might be presents in the wound", correct: false},
            
        ]
    },
   {
        question: "During nature walk, learners realised that the distance from school to the shopping centre was 0.07Hm. What was the length of the road in SI units?",
        answers: [
            {text: "7", correct: true},
            {text: "70", correct: false},
            {text: "0.7", correct: false},
            {text: "700", correct: false},
            
        ]
    },
    {
        question: "The following are laboratory safety measures. Which one is NOT?",
        answers: [
            {text: "Ensure there is enough air circulation in the laboratory", correct: false},
            {text: "Dispose of laboratory waste properly ", correct: false},
            {text: "Ensure that all gas taps are not closed after use", correct: true},
            {text: "Do not interfere with someone else's experiment", correct: false},
            
        ]
    },
    {
        question: "What is the SI unit of Area?",
        answers: [
            {text: "m", correct: false},
            {text: "m2", correct: true},
            {text: "m³", correct: false},
            {text: "cm2", correct: false},
            
        ]
    },
    {
        question: "The following apparatus are used for heating purposes in the laboratory Except?",
        answers: [
            {text: "Bunsen burner", correct: false},
            {text: "Portable burner", correct: false},
            {text: "Burette", correct: true},
            {text: "Spirit lamp", correct: false},
            
        ]
    },
    {
        question: "How do you convert g/cm³ to kg/m³?",
        answers: [
            {text: "Multiply by 1000", correct: true},
            {text: "Divide by 1000", correct: false},
            {text: "Add 1000", correct: false},
            {text: "Subtract 1000", correct: false},
            
        ]
    },
    {
        question: "Which of the following is the SI unit of Electric current?",
        answers: [
            {text: "A", correct: true},
            {text: "Cd", correct: false},
            {text: "L", correct: false},
            {text: "k", correct: false},
            
        ]
    },
    {
        question: "How do you convert kg/m³ to g/cm³?",
        answers: [
            {text: "Subtract 1000", correct: false},
            {text: "Add 1000", correct: false},
            {text: "Multiply by 1000", correct: false},
            {text: "Divide by 1000", correct: true},
            
        ]
    },
  {
        question: "A rectangular piece of land has an area of 80m2. If the width is 8m long, Calculate its length",
        answers: [
            {text: "10m³", correct: false},
            {text: "10cm", correct: false},
            {text: "10m", correct: true},
            {text: "10cm³", correct: false},
            
        ]
    }, 
    {
        question: "The volume of a carton box is 9000m³. If it has a width of 20m and a height of 30m, What is its length in SI units?",
        answers: [
            {text: "150m", correct: false},
            {text: "15cm", correct: false},
            {text: "15m", correct: true},
            {text: "150cm", correct: false},
            
        ]
    },
    {
        question: "Calculate the density of a rectangular object whose mass of 200g and measures 20cm by 40cm by 80cm. Give your answer in SI units",
        answers: [
            {text: "3.125", correct: true},
            {text: "0.003125", correct: false},
            {text: "3125", correct: false},
            {text: "0.3125", correct: false},
            
        ]
    }, 
    {
        question: "Convert 5600g grams to the SI units",
        answers: [
            {text: "56", correct: false},
            {text: "5.6", correct: true},
            {text: "560", correct: false},
            {text: "0.56", correct: false},
            
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

    time = startingMinutes * 60;
    clearInterval(timer);
    timer = setInterval(updateCountdown, 1000); 
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
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
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
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
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
   });
   nextButton.style.display = "block";
}
function showScore(){
  resetState();
   // Display different messages based on the score
    if (score === questions.length) {
        alert('Wow! You answered all the questions correctly. You\'re a star! 🌟 Keep up the excellent work. Mr. Mwangi is incredibly proud of your perfect score!');
    } else {
        alert(`Great effort! You scored ${score} out of ${questions.length}. Every correct answer brings you one step closer to mastery. Keep practicing, and success will follow. Mr Mwangi believes in you!`);
    }
    startQuiz();
 //questionElement.innerHTML = `You scored ${score} out of ${questions.
    //length}!`;
 //nextButton.innerHTML = "Try Again";

 nextButton.style.display = "block";
}

 function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
       showScore();
    }
    }

    nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
     handleNextButton(); 
    }else{
      startQuiz();
    }
});


startQuiz();
