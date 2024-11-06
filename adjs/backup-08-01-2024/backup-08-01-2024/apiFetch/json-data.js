const emp='{"id":1001,"name":"brijesh"}';
// console.log(emp);
//console.log(typeof(emp));

// JSON.parse() convert any string into json object

console.log(JSON.parse(emp));
console.log(typeof(JSON.parse(emp)));

//JSON.stringify : convert any json object into string
 console.log(JSON.stringify(emp));
console.log(typeof(JSON.stringify(emp)));
