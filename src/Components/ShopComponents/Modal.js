import "../../Styles/modal.css";
import React, { useState, useEffect } from "react";

const Modal = (props) => {
  const [productList, setProductList] = useState([]);

  // This will launch only if propName value has chaged.

  useEffect(() => {
    console.log("products", props.productQty);
    let tempList = [];
    props.productQty.forEach((product) => {
      tempList.push(
        <li key={product.name + "a"}>
          {product.name}
        </li>
      );
    });
    setProductList(tempList);
  }, [props.productQty]);

  return (
    <div className="hidden-checkout" key={props.productQty}>
      <ul>{productList}</ul>
      <button
        onClick={() => {
          let modal = document.querySelector(".hidden-checkout");
          modal.classList.toggle("visible-checkout");
        }}
      >
        Test
      </button>
    </div>
  );
};

export default Modal;
