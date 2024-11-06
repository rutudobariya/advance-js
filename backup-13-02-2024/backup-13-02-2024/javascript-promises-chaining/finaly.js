let count=true;
let countValue=new Promise(function add(resolve,reject){
    //resolve("The executions is completed")
    reject("The executions is failed not completed")
})
countValue.finally(function display()
{
   console.log("i am another block");
});


//.then()  fullfilled
// countValue.then(function add1(result){
//   console.log(result);
// })
// countValue.then(function add2(){
//     console.log("The proccess is completed");  //fullfilled
// })

countValue.catch(function(result){
    console.log(result)
})
