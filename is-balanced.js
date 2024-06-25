function isBalanced(input) {
  // Define objects to map opening brackets to their corresponding closing brackets,
  // and to quickly check if a character is a closing bracket
  const stack = [];
  const openBrackets = { "{": "}", "[": "]", "(": ")" };
  const closedBrackets = { "}": true, "]": true, ")": true };

  // Iterate through each character in the input string
  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    // If the character is an opening bracket, push it onto the stack
    if (openBrackets[char]) {
      stack.push(char); // push opening bracket onto stack
    } else if (closedBrackets[char]) {
      const top = stack.pop(); // pop the top element from stack

      // Check if there is no top element (stack is empty) or if the corresponding
      // opening bracket does not match the current closing bracket
      if (!top || openBrackets[top] !== char) {
        return "NO";
      }
    }
  }

  // then outputing the result by ternary operator
  return stack.length === 0 ? "YES" : "NO";
}

// Test cases
console.log(isBalanced("{[()]}"));
console.log(isBalanced("{[(])}"));
console.log(isBalanced("{((])[])[]}"));
console.log(isBalanced("{[]}[{]}"));
