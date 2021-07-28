const operations = [
  { "^": (a, b) => Math.pow(parseFloat(a), parseFloat(b)) },
  { "*": (a, b) => parseFloat(a) * parseFloat(b) },
  { "/": (a, b) => parseFloat(a) / parseFloat(b) },
  { "+": (a, b) => parseFloat(a) + parseFloat(b) },
  { "-": (a, b) => parseFloat(a) - parseFloat(b) },
];

const calculate = (exp) => {
  //getting expressions "3,+,20,/,5,/,13,*,18,"
  //change string to array
  const array = exp.split(",");
  console.log(array);
};

export default calculate;
