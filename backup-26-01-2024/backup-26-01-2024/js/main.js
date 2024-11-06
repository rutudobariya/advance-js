// for enable submit button
function toggleButton(ref,btnId)
{
    document.getElementById(btnId).disabled=false;
}
// window onload 
window.onload=()=>
{
    const form1=document.querySelector("#addForm");
    let items=document.getElementById("items");
    let submit=document.getElementById("submit");
    form1.addEventListener("submit",additem);
    form1.addEventListener("submit",removeitem);
    //alert('hi')

}

// for add new items create a function
function additem(e)
{
    e.preventDefault();
    if(submit.value!="Submit")
    {
        console.log('Hi anybody');
    }

    // add new items

    let newitem=document.getElementById("item").value;
    if(newitem.trim()=="" || newitem.trim()==null)
    {
     if(document.frm.item.value=="")
    {   
       alert('We can not accept Null values for add Items please Input some values for add Items')  
       document.frm.item.focus();
   
    return false;  
    }
}

let itmalpa=/^[a-zA-Z]+$/;
if(!itmalpa.test(document.frm.item.value))
{
 
alert('We can accept only alphabetic character')  
document.frm.item.focus();       
return false;  

}


    else 
    {
      document.getElementById("item").value="";
      let li=document.createElement("li");
      li.className="list-group-item";

    // for add delete button in list
    let deleteButton=document.createElement("button");
    deleteButton.className="btn btn-danger text-white float-end delete";
    deleteButton.appendChild(document.createTextNode("Delete"));


     // for add edit button in list
     let editButton=document.createElement("button");
     editButton.className="btn btn-info text-white float-end edit";
     editButton.appendChild(document.createTextNode("Edit"));
 

    li.appendChild(document.createTextNode(newitem));
    // li.appendChild(li);
    li.append(deleteButton);
    li.append(editButton);
    items.appendChild(li);

     //alert('Hi i am just checked')

    }
}

// create a function for remove items
function removeitem()
{

}