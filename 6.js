const deretFibonaci = (input)=>{
  let fib1=1;
  let fib2=1;
  let deretAwal = [fib1,fib2]
  let fibonaci =[]
  for(let i=1;i<=input-2;i++){
    let fibo = fib1+fib2
    fibonaci.push(fibo)
    fib1=fib2;
    fib2=fibo;
  }
  return deretAwal.join(',')+','+fibonaci.join(',')
}

console.log(deretFibonaci(13))

