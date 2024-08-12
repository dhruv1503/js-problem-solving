Function.prototype.myBind = function (thisArgs, ...args) {
console.log(this)
console.log(this.prototype)

console.log(thisArgs);
console.log(args)
this.prototype = thisArgs
console.log(this);
console.log(this.prototype)
return this
}

const john = {
    age : 24,
    getAge : function(){
        return this.age
    }
}

const johnAge = john.getAge;
const realJohnAge = john.getAge.myBind({age: 28}, 1,2,3)
console.log(realJohnAge)
console.log(realJohnAge())