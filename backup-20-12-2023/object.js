/* object is an entity i.e used to stored a data inside of {"property":value}

 examples : cars, employee, chair , table, book
  object will be declare or assign 3 types 
   a) object as literals
   b) object as instance using New keyword
   c) object declaired as constructor this  keyword

*/

// object as litrals
// const emp={"id":1001,"name":"brijesh"};
// // console.log(emp);
// console.log(typeof(emp));


// object as new keyword or object as instance
// const emp=new Object();
// const res={"id":1001,"name":"brijesh","salary":89500};
// // console.log(typeof(res));
// console.log(res.id + "\n" + res.name + "\n" + res.salary);

// object current value stored inside of this as constructor

function emp(id,name,salary)
{
    this.id=1001,
    this.name="brijesh",
    this.salary=85900

}

var em=new emp(1001,"brijesh",85900); //instance object
console.log(em.id + "\n" + em.name + "\n" + em.salary);
