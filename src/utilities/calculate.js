const add = (first, second) => {
  return first + second;
};

const multiply = (first, second) => {
  return first * second;
};

const subtract = (first, second) => {
  return first - second;
};

const divide = (first, second) => {
  return first / second;
};

const percentage = (first, second) => {
  return (first * second) / 100;
};

const modulus = (first, second) => {
  return first % second;
};
/* const numbers=[20,33,55,99,100];
const sumReducer=(previous,current)=>previous+current;
const total=numbers.reduce(sumReducer,0); */

/* const product = [
  { id: 1, name: "Shampoo", price: 10 },
  { id: 2, name: "Lotion", price: 20 },
  { id: 3, name: "Soap", price: 30 },
  { id: 4, name: "Deodorant", price: 40 },
  { id: 5, name: "Conditioner", price: 50 },
  { id: 6, name: "Hair Spray", price: 60 },
  { id: 7, name: "Hair Gel", price: 70 },
  { id: 8, name: "Hair Color", price: 80 },
  { id: 9, name: "Hair Wash", price: 90 },
  { id: 10, name: "Hair Dryer", price: 100 },
];

const productReducer = (previous, current) => previous + current.price;
const productTotal = product.reduce(productReducer, 0); */

const getTotalPrice = (products) => {
  const reducer = (previous, current) => previous + current.price;
  // return products.reduce(reducer,0);
  const total = products.reduce(reducer, 0);
  return total;
};
// export default add;
export {
  add,
  multiply,
  subtract,
  divide,
  percentage,
  modulus,
  getTotalPrice as getTotal,
};
