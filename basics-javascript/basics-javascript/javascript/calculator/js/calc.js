// clear the text
function clr()
{
    document.getElementById("result").value="";
}
// back the text
function back()
{
    var s=document.getElementById("result").value;
    var ss=s.slice(0,-1);
    document.getElementById("result").value=ss;     
}
// display button input data in result
function display(val)
{
    document.getElementById("result").value+=val;
}
// evaluate final results

function  finalresult()
{
    var x=document.getElementById("result").value;
    var y=eval(x);
    document.getElementById("result").value=y;
}