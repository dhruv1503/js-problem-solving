/**
 * REMOVE DUPLICATES
 * Example Hello World -> Hel Wrd 
 */

function removeDuplicates(string = ""){
    if (typeof(string) !== "string") {
        return "";
      }
      if (!string) {
        return "";
      }
    const alphabetCollection = new Set();
    new Array(string.length).fill(null).forEach((item, index) => {
        const currentAlphabet = string.charAt(index);
       
        if(!alphabetCollection.has(currentAlphabet)){
            alphabetCollection.add(currentAlphabet);
        }
    })
    return Array.from(alphabetCollection).join("");
}


/**
 * TC - O(N + N) => O(N)
 * SC - O(N + N) => O(N)
 */


module.exports = removeDuplicates;