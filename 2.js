/* Tulislah sebuah fungsi untuk mencari huruf yang berulang pertama kali pada 
sebuah string. Berikut contohnya : 
“BCABA” -> Karakter pertama yang berulang adalah B 
“ABCA” -> Karakter pertama yang berulang adalah A */

const firstRepeatedChar = (input)=>{
  let arrayChar =[]
  let str = input.toLowerCase().split('')
  for (let i =0; i<input.length;i++){
    if(i===0){
      arrayChar.push(str[i])
    }else if(arrayChar.includes(str[i])){
      return str[i]
    }else{
      arrayChar.push(str[i])
    }
  }
}

console.log(firstRepeatedChar('DCABCA'))