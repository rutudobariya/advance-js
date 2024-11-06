let count=true;
let countValue=new Promise(function add(resolve,reject){
    resolve("The executions is completed")
})

//.then()  fullfilled

countValue.then(function add1(result){
  console.log(result);
})
countValue.then(function add2(){
    console.log("The proccess is completed");  //fullfilled
})