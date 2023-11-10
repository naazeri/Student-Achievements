const output = document.querySelector('.text')
const vals = document.querySelectorAll('.val')
const clearBtn = document.querySelector('.Ac')
const delteBtn = document.querySelector('.DEL')
const equalBtn = document.querySelector('.equal')

vals.forEach(Val=>{
    Val.addEventListener("click",()=>{
        output.value += Val.value
    })
})

clearBtn.addEventListener("click",()=>{
    output.value = ""
})

delteBtn.addEventListener("click",()=>{
    output.value = output.value.slice(0,-1)
})

equalBtn.addEventListener("click",()=>{
    output.value = eval(output.value)
})



