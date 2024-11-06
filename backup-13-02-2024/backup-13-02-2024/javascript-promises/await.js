/*
await : the keyword of await is used to inside of async function to wait for the asynchrounous operations

  syntax :
  let result=await promise;

  Note : the uses of await pauses the async function to wait for the asynchrounous operations. 
         or
         The uses of await pauses the async function untill the promise returns a result(resolve,reject)  
*/

let promise=new Promise(function(resolve,reject){

    setTimeout(function()
    {
        resolve('Promises should be resolved in 4 seconds')},4000)
    });

//async function
async function asyncFun()
{
      //wait untill the promise resolves
     
      let result=await promise;
      console.log(result);
      console.log('Hello brijesh');
      //console.log();

}

setInterval(asyncFun,3000);
