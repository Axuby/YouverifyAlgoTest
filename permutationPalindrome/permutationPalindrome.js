//
function permutationPalindrome(string) {
  const charMap = {};
  const normStr = string.toLowerCase();
  
  for (let i = 0; i < normStr.length; i++) {
    const char = normStr[i];
    
    if (char !== " ") {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
  }

  let hasFoundOddFreq = false;
  
  for (let char in charMap) {
    const freq = charMap[char];
    
    if (freq % 2 !== 0) {
      if (hasFoundOddFreq) {
        return false;
      } else {
        hasFoundOddFreq = true;
      }
    }
  }

  return true;
}