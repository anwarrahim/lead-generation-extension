
let myLeads = ["hello","anwar","khan"]

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
   // myLeads.push("Anwar Rahim")
   // console.log(myLeads)
   myLeads.push(inputEl.value)
    console.log(myLeads)
})

let listItems = " "
for(let i =0; i < myLeads.length; i++){
    // ulEl.textContent =
    
    listItems += "<li>" + myLeads[i]+"</li>"
    
}

ulEl.innerHTML = listItems