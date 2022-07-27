let value1 = 0;
let operation = "";

document.getElementById("btn1").onclick = function(){
    UpdateDisplay(1);
}

document.getElementById("btn2").onclick = function(){
    UpdateDisplay(2);
}

document.getElementById("btn3").onclick = function(){
    UpdateDisplay(3);
}

document.getElementById("btn4").onclick = function(){
    UpdateDisplay(4);
}

document.getElementById("btn5").onclick = function(){
    UpdateDisplay(5);
}

document.getElementById("btn6").onclick = function(){
    UpdateDisplay(6);
}

document.getElementById("btn7").onclick = function(){
    UpdateDisplay(7);
}

document.getElementById("btn8").onclick = function(){
    UpdateDisplay(8);
}

document.getElementById("btn9").onclick = function(){
    UpdateDisplay(9);
}

document.getElementById("btn0").onclick = function(){
    UpdateDisplay(0);
}

function UpdateDisplay(value){
    document.getElementById("display").value += value;
}

function Calculate(value1, operation, value2){
    switch(operation){
        case "+": return value1 + value2;
        case "-": return value1 - value2;
        case "/": return value1 / value2;
        case "*": return value1 * value2;
    }
}

function Clear(){
    document.getElementById("display").value = "";
}

// =
document.getElementById("equal-button").onclick = function(){
    let result = Calculate(Number(value1), operation, Number(document.getElementById("display").value));
    document.getElementById("display").value = result;
}

// C
document.getElementById("c-button").onclick = function(){
    Clear();
}

// .
document.getElementById("btn-dot").onclick = function(){
    document.getElementById("display").value += ".";
}

// +
document.getElementById("sum-button").onclick = function(){
    operation = "+";
    value1 = document.getElementById("display").value;
    document.getElementById("display").value = "";
}

// -
document.getElementById("less-button").onclick = function(){
    operation = "-";
    value1 = document.getElementById("display").value;
    document.getElementById("display").value = "";
}

// *
document.getElementById("multiply-button").onclick = function(){
    operation = "*";
    value1 = document.getElementById("display").value;
    document.getElementById("display").value = "";
}

// (/)
document.getElementById("divide-button").onclick = function(){
    operation = "/";
    value1 = document.getElementById("display").value;
    document.getElementById("display").value = "";
}