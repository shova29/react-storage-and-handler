import React from "react";
import { addToDb, removeFromDb } from "../../utilities/fakedb";
import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { name, price, id } = props.cosmetic;

  const addToCart = (id) => {
    console.log("add button clicked", id);
    // props.addToCart(props.id);
    addToDb(id);
  };
  const addToCartWithParam = () => addToCart(id);

  const removeFromCart = (id) => {
    removeFromDb(id);
  };

  return (
    <div>
      <div className="product-info">
        <h3>Buy this: {name}</h3>
        <p>Only for: ${price}</p>
        <p>
          <small>It has Id: {id}</small>
        </p>
        <button onClick={addToCartWithParam}>Add to Cart</button>
        <button onClick={() => addToCart(id)}>Purchase</button>
        <button onClick={() => removeFromCart(id)}>Remove</button>
      </div>
    </div>
  );
};

export default Cosmetic;
