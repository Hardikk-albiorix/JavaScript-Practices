//Write a program for simple calculater
function calculater(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      console.log(`${num1} + ${num2} : ${result}`);
      break;
    case "-":
      result = num1 - num2;
      console.log(`${num1} - ${num2} : ${result}`);
      break;
    case "*":
      result = num1 * num2;
      console.log(`${num1} * ${num2} : ${result}`);
      break;
    case "/":
      result = num1 / num2;
      console.log(`${num1} / ${num2} : ${result}`);
      break;
    default:
      console.log("Invalid operator");
      break;
  }
}

calculater(5, 4, "+");
calculater(5, 4, "*");
calculater(5, 4, "-");
calculater(5, 4, "/");
calculater(5, 4, "%");
