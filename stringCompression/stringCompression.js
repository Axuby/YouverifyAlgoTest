function stringCompression (str) {
  if (str.length == 0) {
    console.log('Please enter valid string.');
    return;
  }else if(str.length  <  2  ){
console.log(str)
  }
  var output = '';
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i+1]) {
      output += str[i] + count;
      count = 0;
    }
  }
  console.log(output);
}
