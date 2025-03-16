let btn = document.querySelectorAll(".btn")
let display = document.querySelector(".display")
let dis = document.querySelectorAll(".dis")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
let calculated = document.querySelector(".calculated")
let addSubtract = document.querySelector(".addSubtract")

dis.forEach((button) => {
    button.addEventListener("click", () => {        
        display.innerHTML += button.innerHTML
    })
})
clear.addEventListener("click", () => {
    display.innerHTML = ""
    calculated.textContent = ""
})
equal.addEventListener("click", () => {
    const input = display.innerHTML;
    try{
        const result = eval(input);
        calculated.textContent = parseFloat((result).toFixed(4));        

    }catch(error){
        calculated.textContent = "Invalid Expression"
    }
})
addSubtract.addEventListener("click", () => {
    calculated.textContent = calculated.textContent * -1
})
