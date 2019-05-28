// https://randomuser.me/api/
// https://uinames.com/api/
// http://api.icndb.com/jokes/random
// https://tutorialzine.com/misc/files/example.json
 // chính là giải pháp cho CallbackHell mình đã đề cập ở trên, chúng ta đi thẳng vào một ví dụ:

var firstMethod = function () {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('first method completed');
      resolve({data: '123'});
    }, 2000);
  });
  return promise;
};


var secondMethod = function (someStuff) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(someStuff);
      resolve({newData: someStuff.data + ' some more data'});
      console.log(someStuff);
    }, 2000);
  });
  return promise;
};

var thirdMethod = function (someStuff) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('third method completed');
      resolve({result: someStuff.newData});
      console.log(someStuff);
    }, 3000);
  });
  return promise;
};

firstMethod().then(secondMethod).then(thirdMethod); //(implement)

