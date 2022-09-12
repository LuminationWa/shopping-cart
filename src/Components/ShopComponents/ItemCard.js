import React, { useState } from "react";

const ItemCard = (props) => {
  const [currentQty, setCurrentQty] = useState(0);
  return (
    <div className="item-card" id={props.name}>
      <img src={props.image} alt="product"></img>
      <p>{props.name}</p>
      <div class="qty-bar">
        <button
          onClick={() => {
            if (currentQty != 0) setCurrentQty(currentQty - 1);
          }}
        >
          -
        </button>
        <input
          type="text"
          onChange={(e) => setCurrentQty(parseInt(e.target.value))}
          value={currentQty}
        ></input>
        <button onClick={() => setCurrentQty(currentQty + 1)}>+</button>
      </div>
      <button
        onClick={() => {
          props.updateQty(props.index, currentQty);
          setCurrentQty(0);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ItemCard;
