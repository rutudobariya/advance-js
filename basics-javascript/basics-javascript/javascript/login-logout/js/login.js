function loginus()
{
    var mob=document.getElementById("mobile").value;
    var pwd=document.getElementById("pass").value;
    if(mob=="9998003879" && pwd=="9998003879")
    {
        alert('You are successfully Logged in')
        window.location='dashboard.html'; 
    }
    else 
    {

        alert('Your mobile and password are incorrect try again')
        window.location='index.html';
    }
}

function logout()
{
    alert('You are Logout successfully')
    window.location='index.html';
}
