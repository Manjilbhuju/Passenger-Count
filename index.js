let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let total = document.getElementById("total")
let count = 0
let countHistory = []

console.log(saveEl)

function increment(){
    count += 1
    countEl.innerText = count
}

function decrement(){
    if (count > 0){
        count -= 1
        countEl.innerText = count
    }else{
        alert("Can't decrease below Zero")
    }
}

function save(){
    countHistory.push(count)
    count = 0
    let history = countHistory.join(" - ") 
    saveEl.innerText = history
    countEl.innerText = count
    console.log(countHistory)
    total.innerText = countHistory.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}   