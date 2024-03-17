document.getElementById("btn1").onclick = function () {
    let statement = "Alert Message";
    document.getElementById("statement").innerHTML = statement;
    alert("This is an alert message.");
    document.getElementById("output").innerHTML = "";
}

document.getElementById("btn2").onclick = function () {
    let statement = "123 Alert Message";
    document.getElementById("statement").innerHTML = statement;
    alert("123 is a number alert messaage.");
    document.getElementById("output").innerHTML = "";
}

let a = 10;
let b = 5;

document.getElementById("btn3").onclick = function () {
    let statement = "let num1 = " + a + "<br>let num2 = " + b + "<br> Variables";
    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = "";
}

document.getElementById("btn4").onclick = function () {
    let statement = "thisIsACamelCaseExample";
    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = "";
}

document.getElementById("btn5").onclick = function () {
    let statement = "let num1 = " + a + "<br>let num2 = " + b + "<br> Addition";
    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = 10 + 5;
}

document.getElementById("btn6").onclick = function () {
    let statement = "let num1 = " + a + "<br>let num2 = " + b + "<br> Subtraction";
    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = 10 - 5;
}

document.getElementById("btn7").onclick = function () {
    let statement = "let num1 = " + a + "<br>let num2 = " + b + "<br> Multiplication";
    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = 10 * 5;
}

document.getElementById("btn8").onclick = function () {
    let statement = "let num1 = " + a + "<br>let num2 = " + b + "<br> Division";
    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = 10 / 5;
}

document.getElementById("btn9").onclick = function () {
    let equation = 30 / 5 * 2 + 2 ** 3 - (2 + 4);
    let statement = "30 / 5 * 2 + 2 ** 3 - (2 + 4)";
    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = equation;
}

document.getElementById("clear-statement-btn").onclick = function () {
    document.getElementById("statement").innerHTML = "";
}

document.getElementById("clear-output-btn").onclick = function () {
    document.getElementById("output").innerHTML = "";
}