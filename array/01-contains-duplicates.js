function containsDuplicate(array){
    if(!Array.isArray(array)) return false;
    if(array.length <= 1) return false;
    
    let hasDuplicates = false;
    const countMap = convertToCountMap(array)
    // for(let key in countMap){
    //     console.log(key)
    // }
    for(const key of Array.from(countMap.keys())){
        if(countMap.get(key) > 1){
            hasDuplicates = true;
            break;
        }
        
    }
    for(const [key, value] of countMap){
        if(value > 1){
            hasDuplicates = true;
            break;
        }
        
    }
    return hasDuplicates;

}

function convertToCountMap(array){
const map = new Map();
for(const element of array){
    if(map.has(element)){
        let count = map.get(element)
        map.set(element, ++count);
    }
    else{
        map.set(element, 1);
    }
   
}
return map
}

console.log((containsDuplicate([1,2,5,3, 1])))

module.exports = containsDuplicate;