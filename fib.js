const fib = (n) => {
  let num1 = 1;
  let num2 = 1; 
  
  let counter = 0;
  while (counter<n) {
    console.log(num1, num2)
    let dummy = num2; 
    num2 = num1 + num2;
    num1 = dummy; 
    counter++
    console.log(num2);
  }
  return num2;
}

console.log(fib(5));