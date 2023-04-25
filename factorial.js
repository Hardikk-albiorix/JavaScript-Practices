//Write a javascript program to factorial of given number without recursion.
function factorialWithoutRecursion(num) {
    let fact = 1;
    if (num == 0 || num == 1) {
      return 1;
    } else if (num > 1) {
      for (let i = num; i > 0; i--) {
        fact = fact * i;
      }
      return fact;
    } else {
      return "number is invalid";
    }
  }
  let num = 5;
  let result = factorialWithoutRecursion(num);
  console.log("Factorial of " + num + ":" + result);
  
  //Write a javascript program to factorial of given number with recursion.
  function factorialWithRecursion(num) {
    if (num == 0 || num == 1) {
      return 1;
    } else if (num > 1) {
      return num * factorialWithRecursion(num - 1);
    } else {
      return "number is invalid";
    }
  }
  let number = 1;
  let ans = factorialWithRecursion(number);
  console.log("Factorial of " + number + ":" + ans);