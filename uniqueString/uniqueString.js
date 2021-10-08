
 function uniqueString(stringChar) {
   let stringTracker =  {}
   for (let char of stringChar.toLowerCase()) {
     stringTracker[char] = stringTracker[char]+1 || 1
     }
 // returns true or false based on whether the char of string has been identified before
     for (const key in stringTracker) {
        if (stringTracker[key] > 1) {
              return false
            }
      }
   return true
 }


//Solution 2 with less Data structure
 //Sort the strings and check if the string in position i is the same as the next string, 
 //then they aren't unique  
function uniqueStringNoDS(stringChar) {
  let sortedString = stringChar.split('').sort()
  for (let i = 0; i < sortedString.length; i++) {
    if (sortedString[i] == sortedString[i++]) {
      return false
    }
  }
  return true
}

module.exports = uniqueString