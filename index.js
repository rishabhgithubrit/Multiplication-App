const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
const quesEl = document.getElementById("question")
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score")
quesEl.innerText = `what is ${num1} multiply by ${num2} ?`
const multiply = num1*num2
let score = JSON.parse(localStorage.getItem("score"))
if(!score){
    score = 0
}
scoreEl.innerText = `score : ${score}`
const formEl = document.getElementById("form")

formEl.addEventListener("submit", ()=>{
   const userEl = +inputEl.value
   if(userEl === multiply){
    score++
    updateLocalStorage()
   }
   else{
    score--
    updateLocalStorage()
   }
});
function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
