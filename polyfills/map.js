

// // // No error

// // Array.prototype.myMap = function (callbackFn, thisArg) {
// //     console.log(this)
// // }


// // const multiplyBy2 = (number) => {
  
// //     return number * number
// // }


// // [1,2,3,4,5].myMap()

// // // Error 

// // Array.prototype.myMap = function (callbackFn, thisArg) {
// //     console.log(this)
// // }


// // [1,2,3,4,5].myMap()



// Array.prototype.map2 = function (callback, thisArg){
//     // if (typeof callback !== 'function') {
//     //     throw new TypeError(`${callback} is not a function`);
//     // }
//     console.log("inside mymap")
//    try{
//     const arrLength = this.length;
//     const result = new Array(arrLength);
   
//     for(let i = 0; i < arrLength; i++){
//      if(Object.hasOwn(this, i)){
//        const value = callback.call(thisArg, this[i], i, this);
//        result[i] = value; 
//      }
//     }
//     return result;
//    }
//    catch(error){
//     console.log(error)
//    }
   
//   }

// // const tax = {
// //     taxSlab : 0.1,
// //     calculteTax : function(income){
// //         return this.taxSlab * income;
// //     }

// // }

// // const tax2 = {
// //     taxSlab : 0.2
// // }




// // Array.prototype.map2 = function (callbackFn, thisArg) {
// //     const len = this.length;
// //     const array = new Array(len);
  
// //     for (let k = 0; k < len; k++) {
// //       // Ignore index if value is not defined for index (e.g. in sparse arrays).
// //       if (Object.hasOwn(this, k)) {
// //         array[k] = callbackFn.call(thisArg, this[k], k, this);
// //       }
// //     }
  
// //     return array;
// //   };

// const arr = [1, 2, 3, undefined, 5];
// const result = arr.map2(function(value, index, array) {
//     console.log(`${value} ${index} ${array}`)
//     return value 
// });
// console.log(result);

Array.prototype.myMap = function (callbackFn, thisArg) {
    const len = this.length;
    const arr = new Array(len);
    for(let i = 0; i < len; i++){
      if(Object.hasOwn(this, i)){
        const value = callbackFn.call(thisArg, this[i], i, this);
        arr[i] = value
  
      }
   
      
    }
  return arr;
  
  };

