const isPalindrome = (word)=>{
  if(typeof word !== "string"){
    return "This word is not a string!"
  }
  let array1 = word.toLowerCase().split('')
  let array2 = word.toLowerCase().split('')
  if (array1.reverse().join() === array2.join()){
    return "This is a palindrome"
  } else{
    return "This is not a palindrome"
  }
}
