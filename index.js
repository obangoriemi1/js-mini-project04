const questionEl = document.getElementById("question")
const formEl = document.getElementById("form")
const scoreEl = document.getElementById("score")
const inputEl = document.getElementById("input")

let score = JSON.parse(localStorage.getItem("score"))
if (!score && score !== 0) {
    score = 0;
}
scoreEl.innerText = `Score: ${score}`

let num1, num2, correctAns;

function generateQuestion() {
    num1 = Math.ceil(Math.random() * 10)
    num2 = Math.ceil(Math.random() * 10)
    correctAns = num1 * num2
    questionEl.innerText = `What is ${num1} multiply by ${num2}?`
}

generateQuestion()

formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        score++
    } else {
        score--
    }
    updatelocalStorage()
    scoreEl.innerText = `Score: ${score}`
    inputEl.value = ''
    generateQuestion()
})

function updatelocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}




