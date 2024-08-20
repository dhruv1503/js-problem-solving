const containsDuplicates = require("../../array/01-contains-duplicates");

test("Contains Duplicates - it should return false if array is empty", function(){
   
        const input = [];
        const output = containsDuplicates(input);
        expect(output).toBe(false)
  
})
test("Contains Duplicates - it should return false if parameters provided are in string format", function(){
   
        const input = "1,2,3,4,5,6";
        const output = containsDuplicates(input);
        expect(output).toBe(false)
  
})
test("Contains Duplicates - it should return false if parameters provided are in number format", function(){
   
        const input = 123456;
        const output = containsDuplicates(input);
        expect(output).toBe(false)
  
})
test("Contains Duplicates - it should return false if parameters provided are in object format", function(){
   
        const input = {1: 1, 2:2, 3: 5};
        const output = containsDuplicates(input);
        expect(output).toBe(false)
  
})
test("Contains Duplicates - it should return false if array contains 1 element", function(){
   
        const input = [1];
        const output = containsDuplicates(input);
        expect(output).toBe(false)
  
})
test("Contains Duplicates - it should return true for [1,2,3,4,5,4]", function(){
   
        const input = [1,2,3,4,5,4];
        const output = containsDuplicates(input);
        expect(output).toBe(true)
  
})