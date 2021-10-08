

let NO_OF_CHARS = 256;
function checkPermutation(str1, str2){
     
    // Create 2 count arrays and initialize
    // all values as 0
    let counter1 = Array(NO_OF_CHARS);
    let counter2 = Array(NO_OF_CHARS);
    counter1.fill(0);
    counter2.fill(0);
    let i;
 
    // For each character in input strings,
    // increment count in the corresponding
    // count array
    for(i = 0; i < str1.length && i < str2.length;   i++)
    {
        counter1[str1[i]]++;
        counter2[str2[i]]++;
    }
 
    // If both strings are of different length.
    // Removing this condition will make the program
    // fail for strings like "aaca" and "aca"
    if (str1.length != str2.length)
        return false;
 
    // Compare count arrays
    for(i = 0; i < NO_OF_CHARS; i++)
        if (counter1[i] != counter2[i])
            return false;
 
    return true;
}
 
 module.export = checkPermutation