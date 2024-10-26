
let myLeads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
   // myLeads.push("Anwar Rahim")
   // console.log(myLeads)
   myLeads.push(inputEl.value)
    console.log(myLeads)
})

for(let i =0; i < inputEl.length; i++){
    // ulEl.textContent =
    console.log(myLeads[i])
    
}