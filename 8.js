const cetakGambar = (input)=>{
  console.log(' --- Panjang ---')
  for(let i=0;i<input;i++){
    let results =''
    for(let j=0;j<input;j++){
      if(i===Math.floor(input/2)){
        results +='*   '
      }
      else if(j===0 || j===input-1){
        results +='*   '
      }
      else{
        results +='=   '
      }
    }
    console.log(results)
  }
}

cetakGambar(5)