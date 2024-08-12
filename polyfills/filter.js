Array.prototype.myFilter = function (callbackFn, thisArg) {
    const len= this.length;
    const R = [];
    for(let i = 0; i < len; i++){
     if(Object.hasOwn(this, i) && callbackFn.call(thisArg, this[i], i, this)){
         R.push(this[i]);
       }
 
    }
    return R
 };
 