function reverseString(string = "") {
  if (typeof(string) !== "string") {
    return "";
  }
  if (!string) {
    return "";
  }
  let output = "";
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  return output;
}

