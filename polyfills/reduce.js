// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler


  /**
 * What does array.prototype,reduce do? 
 * it takes 2 params, 1 callback function and 2. initialValue
 * let's take 2 examples 
 * 1. Simple 
 * const sum = (previousValue = 0, currentValue, currentIndex) => (previousValue + currentValue);
 * It will iterate through array, that's it and do nothing else
 */
//   const sum = (previousValue = 0, currentValue, currentIndex) => {
//     console.log(currentIndex)
//     return previousValue + currentValue};

// const input = [1,2,3,4]
// const result = input.reduce(sum); 
//  console.log(result)

/**
 * So what happened here?
 * In first iteration, reduce function called element at 0th index, 
 * arr[0] = 1; 
 * Since we have not provided initialValue, it considered, 
 * arr[0] = previousValue
 * arr[1] = currentValue
 * and stated with currentIndex = 1
 * therefore, iterations look like, 
 * const iter1 = {
     iteration : 1,
     currentIndex : 1,
     previousValue = input[0]
     currentValue : this.previousValue + input[this.currentIndex]
 }
 * 
 * const iter2 = {
     iteration : 2,
     currentIndex : 2,
     previousValue : iter1.currentValue
     currentValue : this.previousValue + input[this.currentIndex]
 }
 const iter3 = {
      iteration : 3,
     currentIndex : 3,
      previousValue : iter2.currentValue
     currentValue : this.previousValue + input[this.currentIndex]
 }
 * 
 * */
 
// const iter1 = {
//      iteration : 1,
//      currentIndex : 1,
//      previousValue : input[0],
//      currentValue : input[0] + input[1]
//  }
  
//   const iter2 = {
//      iteration : 2,
//      currentIndex : 2,
//      previousValue : iter1.currentValue,
//      currentValue : iter1.currentValue + input[2]
//  }
//  const iter3 = {
//       iteration : 3,
//      currentIndex : 3,
//       previousValue : iter2.currentValue,
//      currentValue : iter2.currentValue + input[3]
//  }
 
//  console.table([iter1, iter2, iter3])
 
//  const result2 = input.reduce(sum, 10); 
//  console.log(result2)
 
 /** 
  * Here, we have mentioned initialValue, therefore, it starts iteration from first array index as current Vaue and initial Value as mentioned. 
  * therefore it will like the following
 */
 
 





Array.prototype.myReduce = function (callbackFn, initialValue) {
    const len = this.length;
    if (len === 0 && initialValue === undefined) {
       throw new TypeError('Reduce of empty array with no initial value');
     }
    if(len === 0){
     return initialValue
    }
    if(len === 1){
     return callbackFn(initialValue, this[0], 0)
    }
    let acc = typeof(initialValue) !== 'undefined' ? initialValue : this[0];
    let index = typeof(initialValue) !== 'undefined' ? 0 : 1;
    while(index < len){
    if(Object.hasOwn(this, index)){
     acc = callbackFn(acc, this[index], index, this)
     }
     index++;
    }
    return acc;
   };
   
   /**
    * What does array.prototype,reduce do? 
    * it takes 2 params, 1 callback function and 2. initialValue
    * let's take 2 examples 
    * 1. Simple 
    * const sum = (previousValue = 0, currentValue, currentIndex) => (previousValue + currentValue);
    * It will iterate through it, that's it and do nothing else
    */
   
   // 1st case when user has not defined initialValue