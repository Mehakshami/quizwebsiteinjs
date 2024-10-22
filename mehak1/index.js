const questions = [
    {
        question: "Which built-in method returns the calling string value converted to upper case?",
        options: [" global variable", "local variable", " Both of the above", "None of the above"],
        answer: 1
    },
    {
        question: "Which of the following function of String object creates an HTML hypertext link that requests another URL?",
        options: ["link()", "sub()", "sup()", " small()"],
        answer: 1
    },
    {
        question: " Inside which HTML element do we put the JavaScript?",
        options: ["<javascript>", "<js>", "<src>", "<script>"],
        answer: 4
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.innerText = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        optionsElement.innerHTML += `
            <div>
                <input type="radio" name="option" id="option${index}" value="${index}">
                <label for="option${index}">${option}</label>
            </div>
        `;
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
        
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    } else {
        alert("Please select an answer!");
    }
}

function showResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `<h2>Your Score: ${score} out of ${questions.length}</h2>`;
}

loadQuestion();
