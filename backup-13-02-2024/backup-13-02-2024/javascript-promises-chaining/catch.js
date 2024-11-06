// .catch() is used with the callback when the promises is rejected

const count=false;
let countValue=new Promise(function(resolve,reject){

    
    //resolve('The operations is success')
    reject('The operations is failed error')

})
countValue.then(
    function successValue(result)
    {
        console.log(result);
    })

//if operations is reject

.catch(

    function errorValue(result)
    {
        console.log(result)
    }
)



