
fetch('https://brijesh1990.github.io/apifetchta.github.io/')
.then(response => response.json())
.then(json =>console.log(json))


/* 

const myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let text = localStorage.getItem("testJSON");
let obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;
document.getElementById("demo").innerHTML = obj.city;


*/

//<p id="demo"></script>