const isAnagram = (word1, word2) =>{
if ((typeof word1 !== "string") || (typeof word2 !== "string")){
console.log("Please compare two strings")
return
}

const unspacedWord1 = word1.replace(" ","")
console.log(unspacedWord1)
const unspacedWord2 = word2.replace(" ","")
console.log(unspacedWord2)


if(unspacedWord1.length !==  unspacedWord2.length){
console.log("Not an anagram")
return
}
const sortedWord1 = unspacedWord1.toLowerCase().split('').sort()
console.log(sortedWord1)
const sortedWord2 = unspacedWord2.toLowerCase().split('').sort()
console.log(sortedWord2)
if(sortedWord1 === sortedWord2){
return "Yes"
}
else{
return "No"
}
}
