function highestPalindrome(s, k) {
  function helper(s, i, j, k) {
    // Base case for recursion right index, so s might be palindrome
    if (i >= j) {
      return s;
    }

    // Just make sure if array i and j is the same, then return helper to check next inner pair
    if (s[i] === s[j]) {
      return helper(s, i + 1, j - 1, k);
    }

    // make sure i and j are not the same, so can return null
    if (k === 0) {
      return null;
    }

    let result1 = null,
      result2 = null;

    // check if character i greater than j, then modify j to i, and make decrement for k, and recursively call helper, and store into result 1
    if (s[i] > s[j]) {
      let new_s = s.slice(0, j) + s[i] + s.slice(j + 1);
      result1 = helper(new_s, i + 1, j - 1, k - 1);
    }

    // vice versa with above but restore it to result 2
    if (s[i] < s[j]) {
      let new_s = s.slice(0, i) + s[j] + s.slice(i + 1);
      result2 = helper(new_s, i + 1, j - 1, k - 1);
    }

    // then check again for both, if not null, then return the larger string, if only one return one of it, and both return null
    if (result1 && result2) {
      return result1 > result2 ? result1 : result2;
    } else if (result1) {
      return result1;
    } else {
      return result2;
    }
  }

  // call helper on the entire string s from indices 0 to length of s and minus 1 with k changes allowed
  let result = helper(s, 0, s.length - 1, k);

  // except the impossible case
  if (result === null) {
    return "-1";
  }
  return result;
}

console.log(highestPalindrome("3943", 1));
console.log(highestPalindrome("932239", 2));
console.log(highestPalindrome("3843", 2));
console.log(highestPalindrome("8092", 2));
