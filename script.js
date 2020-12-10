//operand + log
const operandText = document.querySelector('[data-operand]')
const logText = document.querySelector('[data-log]')
//equal, clear (all-2buttons), delete
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const clearButtonAll = document.querySelector('[data-clearall]')
const deleteButton = document.querySelector('[data-delete]')
//operations, numbers
const operationButtons = document.querySelectorAll('[data-operation]')
const numberButtons = document.querySelectorAll('[data-number]')

//vars
let operand = ''
let log = ''
let operation

//functions
//clear function, also calling updateOutput() to actually change inner HTML
function clearAll(){
    operand = ''
    log = ''
    operation = ''
    updateOutput();
}
function clearOperand(){
    operand = ''
    updateOutput();
}
function deleting(){
    operand = operand.slice(0, -1)
    updateOutput();
}

//function to pick operation
function pickOperation(input){
    if(operand === '')return;
    if(log !== ""){
        count()
    }
    operation = input
    log = operand + ' ' + operation;
    operand = ''
}
function count(){
    let result = 0;
    let x = log.split(' ')
    let cleanLog = parseInt(x[0])
    let typedOperand = parseInt(operand)
    switch(operation){
        case '+':
            result = cleanLog + typedOperand
            break
        case '-':
            result = cleanLog - typedOperand
            break
        case '*':
            result = cleanLog * typedOperand
            break
        case '÷':
            result = cleanLog / typedOperand
            break  
        case '1/x':
            result = 1 / cleanLog
            break    
        case 'x2':
            result = cleanLog * cleanLog
            break             
         case 'x^(1/2)':
            result = Math.sqrt(cleanLog)
            break 
        case '%':
            result = cleanLog % typedOperand
            break        

    }
    operand = result
    operation = ''
    log = ''
}

//function for passing number into variable, that will be used in updateOutput()
function passNumberToOutput(number){
    if(number === '.' && operand.includes('.')) return;
    operand = operand + number
}
//function to change display of output
function updateOutput(){
    operandText.innerHTML = numberWithCommas(operand)
    logText.innerHTML = numberWithCommas(log)
}
//function for commas in updateOutput //copiedfrom stack overflow
function numberWithCommas(output) {
    var parts = output.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
//event listeners
//clicking on number buttons
numberButtons.forEach(button =>{
    button.addEventListener('click', () =>{
        passNumberToOutput(button.innerHTML)
        updateOutput()
    })
})
operationButtons.forEach(button =>{
    button.addEventListener('click', () => {
        pickOperation(button.innerHTML)
        updateOutput()
    })
})
equalsButton.addEventListener('click', () =>{
    count()
    updateOutput()
})

clearButtonAll.addEventListener('click', clearAll)
clearButton.addEventListener('click', clearOperand)
deleteButton.addEventListener('click', deleting)