// 1. & 2.
var headingName = document.createElement('h1')
headingName.style.textAlign = 'center'
headingName.style.color = '#A9A9A9'
headingName.innerHTML = 'Daniel Benjumea'
var bodyElement = document.getElementsByTagName('body')[0]
bodyElement.appendChild(headingName)
// 3.
var input1 = document.createElement('input')
input1.setAttribute('id','input1')
var input2 = document.createElement('input')
input2.setAttribute('id','input2')
var buttonElement = document.createElement('button')
var sumResult = document.createElement('p')

input1.style.border = '1px solid black'
input2.style.border = '1px solid black'
buttonElement.innerHTML = 'Sum'

bodyElement.appendChild(input1)
bodyElement.appendChild(input2)
bodyElement.appendChild(buttonElement)
bodyElement.appendChild(sumResult)

let estilo1 = (color)=>{
    input1.style.border = '1px solid ' + color
}
let estilo2 = (color)=>{
    input2.style.border = '1px solid ' + color
}





let validation = (input1, input2, result, estilo1, estilo2)=>{
    try{
        //let inputValue1 = parseInt(input1)
        //let inputValue2 = parseInt(input2)

        for(let char in input1)
            if(isNaN(input1.charAt(char))) {
                let color = 'red'
                estilo1(color)
                throw new Error('Please enter only numeric values')
            }
        for(let char in input2)
            if(isNaN(input2.charAt(char))) {
                let color = 'red'
                estilo2(color)
                throw new Error('Please enter only numeric values')
            }
         
            
        
        sumResult.innerHTML = result
    }catch(error){
        
        sumResult.innerHTML = error.message
        
    }
}

buttonElement.addEventListener('click',()=>{
    let value1 = input1.value
    let value2 = input2.value
    
    let result = parseInt(input1.value) + parseInt(input2.value)
    validation(value1,value2, result, estilo1, estilo2)
    
})












