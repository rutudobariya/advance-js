function sbtot()
{
    var p=document.getElementById("price").value;
    var q=document.getElementById("qty").value;
    var sub=p*q;
    document.getElementById("tot").innerHTML=+sub;
}