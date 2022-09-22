import "../../Styles/modal.css";
import React, { useState, useEffect } from "react";

const Modal = (props) => {
  const [productQty, setProductQty] = useState([]); //Elements to be displayed
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    makeList(props.products);
  }, [props.products]);

  const makeList = (products) => {
    // Gets triggered by useEffect when there's a change in product quantities. Filters the array and populates productQty with products added to cart
    let tempQty = [];
    products.forEach((product) => {
      if (product.qty > 0) tempQty.push({
         name : product.name,
         qty : product.qty
       });
    });
    setProductQty(tempQty);
  };

  useEffect(() => {
    // Triggered after productQty gets updated. Creates a Li for each element and pushes it to productList
    let tempList = [];
    productQty.forEach((product) => {
      tempList.push(
        <li key={product.name + "a"}>
          {product.name} - {product.qty}x
        </li>
      );
    });
    setProductList(tempList);
  }, [productQty]);


  return (
    <div className="hidden-checkout" key={props.productQty}>
      <ul>{productList}</ul>
      <button
        onClick={() => {
          let modal = document.querySelector(".hidden-checkout");
          modal.classList.toggle("visible-checkout");
        }}
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
