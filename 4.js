const printSegitiga =(input)=>{
  for (let i=0;i<input;i++){
    let results =''
    for(let j=0;j<(input*2)-1;j++){
      if(i===0){
        results +='o '
      }
      else if(i===j){
        results +='o '
      }
      else if(j===2*input-2-i){
        results +='o '
      }
      else{
        results +='  '
      }
    }
    console.log(results)
  }
}
printSegitiga(6)

