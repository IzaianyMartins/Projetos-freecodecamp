function palindrome(str) {
    str = str.replace(/\W|_/g, "").toLowerCase();
    console.log(str);
  
    let reverseStr = str.split("").reverse().join("");
    if(str === reverseStr){
      return true
    } else {
      return false;
    }
  }
  console.log(palindrome("eye"));