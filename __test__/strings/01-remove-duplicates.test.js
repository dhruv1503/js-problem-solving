
const removeDuplicates = require("../../strings/01-remove-duplicates")

test("Remove Duplicates - should remove duplicates from the string", () => {
    const input = "Dhruv Aggarwal"
    const result = removeDuplicates(input);
    expect(result).toBe("Dhruv Agawl")
});

test("Remove Duplicates - empty string should reutn empty string", () => {
    const input = "";
    const result = removeDuplicates(input);
    expect(result).toBe("")
});

test("Remove Duplicates - number input should return empty string", () => {
    const input = 100;
    const result = removeDuplicates(input);
    expect(result).toBe("")
})
test("Remove Duplicates - Object input should return empty string", () => {
    const input = {};
    const result = removeDuplicates(input);
    expect(result).toBe("")
})
test("Removing Duplicates - Array input should return empty string", () => {
    const input = [];
    const result = removeDuplicates(input);
    expect(result).toBe("")
})