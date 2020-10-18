const checkPalindrome = (input)=>{
  let reverse = input.split("").reverse().join("").toLowerCase()
  if(input === reverse){
    return 'String merupakan Palindrome'
  }else{
    return 'String bukan Palindrome'
  }
}
console.log(checkPalindrome('saya'))
