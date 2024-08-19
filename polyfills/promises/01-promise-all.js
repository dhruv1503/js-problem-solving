function promise1 (){
    return new Promise((resolve, reject) => {
     if( 1 < 2){
        resolve("True, 1 < 2")
     }
     else{
        reject("False, 1 > 2")
     }
    })

}
function promise2 (){
    return new Promise((resolve, reject) => {
     if( 2 < 3){
        setTimeout(() => {resolve("True, 2 < 3")}, 3000)
     }
     else{
        reject("False, 2 > 3")
     }
    })

}
const promise3  = Promise.reject(100);
const result1 = promise1().then((data) => (data)).catch((error) => (error));
const result2 = promise2().then((data) => (data)).catch((error) => (error));


const result = Promise.all([result1, result2, promise3]);
console.log(result)
result.then((value) => (console.log(value))).catch((error) => (console.log(error)))

function myPromiseAll(array){
  const result = [];
  let promisesCompleted = 0
  return new Promise((resolve, reject) => {
    array.forEach((promise, index) => {
       promise.then((data) => {
        result[index] = data;
        promisesCompleted ++;
        if(array.length === promisesCompleted){
            resolve(result)
        }
       })
       .catch((error) => {
           reject(error)
       })

    })
  })
}

myPromiseAll([result1, result2, promise3]).then((value) => (console.log(value))).catch((error) => (console.log(error)))


