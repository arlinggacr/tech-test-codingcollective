function weightedStrings(input, queries) {
  const weights = {};
  let i = 0;

  // Calculate weights for each character and its substrings in the input string
  // and using helper by chatgpts to calculate
  while (i < input.length) {
    let count = 1;
    while (i + 1 < input.length && input[i] === input[i + 1]) {
      count++;
      i++;
    }
    const char = input[i];
    for (let j = 1; j <= count; j++) {
      const substring = input.slice(i - j + 1, i + 1); // substring from i-j+1 to i
      const currentWeight = (char.charCodeAt(0) - "a".charCodeAt(0) + 1) * j;
      if (weights[substring]) {
        weights[substring].push(currentWeight);
      } else {
        weights[substring] = [currentWeight];
      }
    }
    i++;
  }

  // Prepare results based on queries
  const results = [];
  for (const query of queries) {
    let found = false;
    for (const key in weights) {
      if (weights[key].includes(query)) {
        results.push("Yes");
        found = true;
        break;
      }
    }
    if (!found) {
      results.push("No");
    }
  }

  return results;
}

const inputString = "abbcccd";
const queryArray = [1, 3, 9, 8];
const output = weightedStrings(inputString, queryArray);
console.log(output);
