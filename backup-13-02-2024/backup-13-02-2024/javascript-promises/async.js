/* 
 
async function test()
{
    console.log('a test will be asynchrounous best')
    return Promise.resolve(test)
}
test().then(result)
{
    console.log(result)
}

*/
async function test()
{
    console.log('a test will be asynchrounous best')
    return Promise.resolve(1)
}
test().then(function(result)
{
    console.log(result)
});
