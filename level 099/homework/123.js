const greet = (name = "მაყურებელი") => "გამარჯობა, " + name + "!";



const sum = (a = 0, b = 5) => a + b;



const max = (a = 10, b = 20) => (a > b ? a : b);



const multiply = (a = 1, b = 2, c = 3) => a * b * c;



const calculatePrice = (price, tax = 0.05) => price + price * tax;



const repeatText = (text, times = 3) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += text;
  }
  return result;
};



const isGreater = (a = 5, b = 10) => a > b;



const personalInfo = ({ name = "მაია", age = 25, city = "თბილისი" } = {}) =>
  "გამარჯობა, მე ვარ " + name + ", " + age + " წლის და მცხოვრები ვარ " + city + "-ში.";



const numberSeries = (start = 1, end = 10, step = 1) => {
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  return result;
};