import React, { useState, useEffect } from "react";
import "../Styles/shop.css";
import StickyBar from "./ShopComponents/StickyBar";
import Products from "./ShopComponents/Products";
import ItemCard from "./ShopComponents/ItemCard";
import Modal from "./ShopComponents/Modal";

const Shop = () => {
  const [itemQty, setItemQty] = useState(0);
  const [products, setProducts] = useState(Products()); //Used to store product qty
  const [productQty, setProductQty] = useState([]);
  const cardsArray = []; //Used for display
  let modal = document.querySelector(".hidden-checkout");

  useEffect(() => {
    // Triggered after updateQty() -> Sums all the quantities -> setItemQty() -> StickyBar updates
    let totalItems = products.reduce(function (acc, obj) {
      return acc + obj.qty;
    }, 0);
    setItemQty(totalItems);
  }, [products]);

  const updateQty = (index, qty) => {
    let newArray = [...products];
    newArray[index].qty = products[index].qty + qty;
    setProducts(newArray);
  };

  const checkout = () => {
    // Filters products wity qty < 1
    let tempQty = [];
    products.forEach((product) => {
      if (product.qty > 0) tempQty.push({ [product.name]: product.qty });
    });
    // Element is getting rerendered with parent and class gets deleted
    setProductQty(tempQty);
    if (productQty.length > 0) modal.classList.add("visible-checkout");
  };

  products.forEach((product, index) => {
    cardsArray.push(
      <ItemCard
        name={product.name}
        image={product.image}
        index={index}
        updateQty={updateQty}
      />
    );
  });

  return (
    <div class="shop">
      <Modal productQty={productQty} />
      <StickyBar itemQty={itemQty} checkout={checkout} />
      <div class="items-display">{cardsArray}</div>
    </div>
  );
};

export default Shop;
