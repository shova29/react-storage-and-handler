import React from "react";
import { add, multiply, subtract, divide } from "../../utilities/calculate";

const Shoes = () => {
  const first = 150;
  const second = 100;
  const total = multiply(first, second);
  const sum = add(first, second);
  const sub = subtract(first, second);
  const div = divide(first, second);
  //   const mod = modulus(first, second);

  return (
    <div>
      <h3>This is the Shoes Dept.</h3>
      <p>
        Total: {total} and Sum: {sum}
      </p>
      <p>
        Subtract: {sub} and Divide: {div}
      </p>
    </div>
  );
};

export default Shoes;
