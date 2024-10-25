var btn = document.getElementById("btn");
var p = document.getElementById("p")
var h1 = document.getElementById("h1")
var q_btn = document.getElementById("add_q")
var Q = document.getElementById("Q")
var answer = document.getElementById("An")
var n_an = document.getElementById("n_an")
var exit_q = document.getElementById("exit_q")
var count = 0
var e_c = document.getElementById("each_click")
var qus = document.getElementById("Qus")
var bottom = document.getElementById("bottom")
// var add_q = document.getElementById("add_q")
var conc = document.querySelector(".bottom h2")

function main_btn() {
    count+=1
    p.innerHTML = count
    if (count == e_c.value) {
        if (qus.value != "") {
            bottom.style = "display: flex;text-align: center;gap: 10px;flex-direction: column"
            h1.innerHTML = qus.value
        }
    }
}

function ans(){
    if (n_an.value == answer.value) {
        conc.innerHTML = "Great job it is correct"
    }else{
        conc.innerHTML = "Oh Sorry you can try again.."
    }
}

function Qu () {
    exit_q.style = "visibility: visible;"
    Q.style = "display: block;text-align: center;padding-bottom: 20px;"
}

function exit_qu(){
    exit_q.style = "display: none;"
    Q.style = "display: none;"
}

function rem_q(div_name) {
    div_name.style = "display: none;"
}

function add_q(add_div) {
    show(add_div)
}

function show(element){
    element.style = "visibility: visible;"
}