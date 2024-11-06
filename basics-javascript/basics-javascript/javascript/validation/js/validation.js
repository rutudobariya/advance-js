function valid()
{
    // if(document.frm.mobile.value=="")
    // {
    //     // alert('please enter your mobile numbers')
    //     document.getElementById("error").innerHTML="Please enter mobile number";
    //     document.frm.mobile.focus();
    //     return false;

    // }

    if(document.frm.email.value=="")
    {
        // alert('please enter your mobile numbers')
        document.getElementById("error").innerHTML="Please enter email";
        document.frm.email.focus();
        return false;

    }

    var em=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!em.test(document.frm.email.value))
    {
        // alert('please enter your mobile numbers')
        document.getElementById("error").innerHTML="Please enter valid email Address";
        document.frm.email.focus();
        return false;

    }
    if(document.frm.password.value=="")
    {
        alert('please enter your Password')
        document.frm.password.focus();
        return false;

    }
    
}