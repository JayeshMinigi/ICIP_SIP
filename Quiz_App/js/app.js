const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does the “this” keyword refer to in JavaScript?",
    a: "The current function",
    b: "The global object",
    c: "The object that the function belongs to",
    d: "The parent object of the current object",
    correct: "c",
},
{
    question: "Which of the following is not a primitive data type in JavaScript?",
    a: "Number",
    b: "String",
    c: "Boolean",
    d: "Object",
    correct: "d",
},
{
    question: "What does the “typeof” operator do in JavaScript?",
    a: "Returns the data type of a variable",
    b: "Checks if a variable is defined",
    c: "Assigns a value to a variable",
    d: "Concatenates two strings",
    correct: "a",
},
{
    question: "Which of the following is not a data type in JavaScript?",
    a: "Boolean",
    b: "String",
    c: "Number",
    d: "Character",
    correct: "d",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
allInputs[4].nextElementSibling.innerText = data.e

}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h2 class="w-100"> Thankyou for playing the Quiz! </h2>
        <h3 class="w-100"> Hey, you've scored ${correct} / ${total}! </h3>
    </div>
`
}
loadQuestion(index);