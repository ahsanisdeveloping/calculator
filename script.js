function allclear()
{
    document.getElementById("output").value = "";
}
function percentage()
{
    document.getElementById("output").value += document.getElementById("btn2").innerHTML;
}
function remove()
{
    var num = document.getElementById("output").value;
    var newvalue = num.slice(0,-1);
    document.getElementById("output").value = newvalue;
}
function divide()
{
    document.getElementById("output").value += document.getElementById("btn4").innerHTML;
}
function seven()
{
    document.getElementById("output").value += document.getElementById("btn5").innerHTML;
}
function eight()
{
    document.getElementById("output").value += document.getElementById("btn6").innerHTML;
}
function nine()
{
    document.getElementById("output").value += document.getElementById("btn7").innerHTML;
}
function multiply()
{
    document.getElementById("output").value += document.getElementById("btn8").innerHTML;
}
function four()
{
    document.getElementById("output").value += document.getElementById("btn9").innerHTML;
}
function five()
{
    document.getElementById("output").value += document.getElementById("btn10").innerHTML;
}
function six()
{
    document.getElementById("output").value += document.getElementById("btn11").innerHTML;
}
function subtract()
{
    document.getElementById("output").value += document.getElementById("btn12").innerHTML;
}
function one()
{
    document.getElementById("output").value += document.getElementById("btn13").innerHTML;
}
function two()
{
    document.getElementById("output").value += document.getElementById("btn14").innerHTML;
}
function three()
{
    document.getElementById("output").value += document.getElementById("btn15").innerHTML;
}
function sum()
{
    document.getElementById("output").value += document.getElementById("btn16").innerHTML;
}
function zeros()
{
    document.getElementById("output").value += document.getElementById("btn17").innerHTML;
}
function zero()
{
    document.getElementById("output").value += document.getElementById("btn18").innerHTML;
}
function decimal()
{
    document.getElementById("output").value += document.getElementById("btn19").innerHTML;
}
function calc()
{
    document.getElementById("output").value = eval(document.getElementById("output").value);
}

