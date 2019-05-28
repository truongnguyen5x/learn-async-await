var firstMethod = function () {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('first method completed');
      resolve({data: '123'});
    }, 10000);
  });
  return promise;
};


var secondMethod = function () {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('second method completed');
      resolve({newData: ' some more data'});
    }, 15000);
  });
  return promise;
};

var thirdMethod = function () {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('third method completed');
      resolve({result: "third "});
    }, 3000);
  });
  return promise;
};



// Promise.all([secondMethod(),thirdMethod() ])
// .then(function(res){
//   console.log(res)
//     return firstMethod()
// }).then(function(res){
//   console.log(res);
// }).catch(function(err){
//   console.log(err);
// });

// async function getAll(){
//   let result = await Promise.all([secondMethod(),thirdMethod()]);
//   return result;
// }
// getAll().then(function(res){
//     console.log(res);
//     return firstMethod()
// }).then(function(res){
//     console.log(res);
// });


// khi 2 await được viết gần nhau mà không có Promise nào xen giữa thì được bắt đầu cùng nhau
async function test(){
  var a = firstMethod();
  var b = secondMethod();
  var re1 = await a;
  console.log(re1);
  var re2 = await b;
  console.log(re2);
}
test();