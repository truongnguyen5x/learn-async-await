const axios = require('axios');

 async function getJSONAsync() {
    // The await keyword saves us from having to write a .then() block.
    let json = await axios.get('https://tutorialzine.com/misc/files/example.json');
    // The result of the GET request is available in the json variable.

    // We return it just like in a regular synchronous function.
    console.log("done")
    return json;
}
getJSONAsync().then(function(res){
    console.log(res)
})