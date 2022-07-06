let displayVal = "";
let a = "";
let b = "";
let queuedOperator = "";
let displayIsResult = false;
let display = document.querySelector(".display");

function eventListeners(){

    let numButton = document.querySelectorAll(".number");
    numButton.forEach(numButton => numButton.addEventListener('click', numClick));

    let decimalButton = document.querySelector(".decimal");
    decimalButton.addEventListener('click', decimalClick);

    let clearButton = document.querySelector(".clear");
    clearButton.addEventListener('click', cClick);

    let allClearButton = document.querySelector(".allclear");
    allClearButton.addEventListener('click', acClick);

    let percentageButton = document.querySelector(".percentage");
    percentageButton.addEventListener('click', percentageClick);

    let equalsToButton = document.querySelector(".equalsto");
    equalsToButton.addEventListener('click', equalsToClick);

    let changeSignButton = document.querySelector(".changesign");
    changeSignButton.addEventListener('click', changeSign);

    let operatorButton = document.querySelectorAll(".operator");
    operatorButton.forEach(operatorButton => operatorButton.addEventListener('click', operatorClick));
}

function numClick(){
    if(displayIsResult){displayVal = ""; displayIsResult = false;};
    if(displayVal.length > 9){return};
    if(displayVal === 0 && this.textContent == 0){return};
    if(displayVal == 0 && displayVal.includes(".") === false) {displayVal = this.textContent;
    } else {displayVal = displayVal + this.textContent;}
    display.textContent = displayVal;
}
function decimalClick(){
    if(displayVal.includes(".")){return}
    if (displayVal == 0){displayVal = "0."
    } else {displayVal = displayVal + "."};
    display.textContent = displayVal;
}

function operatorClick(){
    if(displayVal == ""){alert("Please enter a number"); return;}
    if(a === ""){
        a = displayVal;
        displayVal = "";
        display.textContent = this.textContent;
    } else if (a !== "" && b === ""){
        console.log("operator is " + queuedOperator)
        b = displayVal;
        console.log("b = " + b);
        math(a,b,queuedOperator);
        a = displayVal;
        b = "";
        displayIsResult = true;
    }

    queuedOperator=this.textContent;
}

function percentageClick(){
    if(a!=""){
        b = a * displayVal / 100;
        math(a,b,queuedOperator);
        a = "";
        b = "";
        displayIsResult = true;
    } else {
        displayVal = displayVal / 100;
        displayVal = displayVal.toString();
        display.textContent = displayVal;
    }
}

function cClick(){
    if(display.textContent === queuedOperator){
        queuedOperator = "";
        displayVal = a;
        a = "";
        display.textContent = displayVal;
        return;
    }
    displayVal = "";
    display.textContent = queuedOperator;
}

function acClick(){
    displayVal = "";
    display.textContent = "0";
    a = "";
    b = "";
    queuedOperator = "";
    displayIsResult = false;
}

function math(a,b,operator){
    a = Number(a);
    b = Number(b);
    if (operator === "+"){displayVal = a + b
    }else if (operator === "-"){displayVal = a - b
    } else if (operator === "*"){displayVal = a * b
    } else if (operator === "/"){displayVal = a / b}
    let roundedResult = Math.round(displayVal * 1000) / 1000;
    console.log(roundedResult + 'is rounded');
    if (roundedResult.toString().length > 10) {roundedResult = roundedResult.toExponential(7)};
    display.textContent = roundedResult;
    console.log("result "+ displayVal)
}

function equalsToClick(){
    if (a == "" || queuedOperator == ""){return}
    b = display.textContent;
    math(a,b,queuedOperator)
    a = "";
    b = "";
    displayIsResult = true;
}

function changeSign(){
    displayVal *= -1;
    displayVal = displayVal.toString();
    display.textContent = displayVal;
}

eventListeners();