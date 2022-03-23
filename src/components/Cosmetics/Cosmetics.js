import React, { useEffect, useState } from "react";
import { getTotal } from "../../utilities/calculate";
import Cosmetic from "../Cosmetic/Cosmetic";
import "./Cosmetics.css";

const Cosmetics = () => {
  /* const cosmetics = [
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
    { id: 11, name: "Hair Styling", price: 110 },
    { id: 12, name: "Hair Dye", price: 120 },
    { id: 13, name: "Hair Perm", price: 130 },
    { id: 14, name: "Alta", price: 140 },
  ]; */

  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  const total = getTotal(cosmetics);
  return (
    <div>
      <h2>HELLO From Cosmetics World*!*</h2>
      <p>Money: {total}</p>
      <div className="product">
        {cosmetics.map((cosmetic) => (
          <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
        ))}
      </div>

      {/*   return (
            <div key={cosmetic.id}>
              <p>
                {cosmetic.name} - {cosmetic.price}
              </p>
            </div>
          ); */}
    </div>
  );
};

export default Cosmetics;
