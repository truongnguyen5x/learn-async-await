const axios = require('axios');
async function firstMethod(){
    let result = await axios('https://randomuser.me/api/')
    console.log('first done')
    return result;
}
async function secondMethod(){
    let result = await axios('https://uinames.com/api/')
    console.log('second done')
    return result;
}

async function thirdMethod(){
    let result = await axios('http://api.icndb.com/jokes/random')
    console.log('third done')
    return result;
}

async function getAll(){
    const result = await Promise.all([firstMethod(),secondMethod()]);
    return result;
}

getAll()
.then(function(res){
    console.log(res[0].data);
    console.log(res[1].data);
    return thirdMethod();
}).then(function(res){
    console.log(res.data);
});