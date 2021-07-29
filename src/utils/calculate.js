import { operators } from "./constants";
const operations = {
  "^": (a, b) => Math.pow(a, b),
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "√": (a, b) => Math.sqrt(a, b),
};

function calculate(exp) {
  //getting expressions "3+20/5/13*18"
  //change string to array
  for (let i = 0; i < operators.length; i++) {
    let rg = new RegExp("\\" + operators[i], "g");
    exp = exp.replace(rg, "," + operators[i] + ",");
  }
  const array = exp.split(",");
  let result = 0;
  let tempop;
  array.map((a, index) => {
    if (operations[a]) {
      tempop = a;
    } else {
      if (index === 0) {
        result = Number(result) + Number(a);
      } else {
        if (tempop) {
          result = operations[tempop](Number(result), Number(a));
          tempop = undefined;
        }
      }
    }
    return result;
  });
  return result;
}

export default calculate;
