const countHandShake =(person)=>{
  let count =0
  for (let i = 1; i<=person;i++){
    for(let j=i; j<=person-1;j++){
      count ++
    }
  }
  return count
}

console.log(countHandShake(6))