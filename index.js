let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(countEl)

let taba = 0

function increment() {
    taba +=  1
    countEl.textContent = taba
}
function save(){
    let countStr = taba + " - "
     saveEl.textContent += countStr
     countEl.textContent = 0
     taba = 0
 
}