const myAny = function(array = []){
return new Promise((resolve, reject) => {
    const errorList = new Array(array);
   let counter = 0;
    array.forEach(promise => {
        Promise.resolve(promise).then((resolve)).catch((error) => {
            errorList[counter] = error;
            counter ++;
            if(array.length === counter){
                reject(errorList)
            }
        })
    });
})
}

function promise1 (){
    return new Promise((resolve, reject) => {
     if( 1 > 2){
        resolve("True, 1 < 2")
     }
     else{
        reject("False, 1 > 2")
     }
    })

}
function promise2 (){
    return new Promise((resolve, reject) => {
     if( 2 > 3){
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

myAny([result1, result2, promise3]).then((data) => (console.log(data))).catch((error) => (console.log("error", error)))
