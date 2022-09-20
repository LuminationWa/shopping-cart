import React, { useState, useEffect } from "react";
import "../Styles/shop.css";
import StickyBar from "./ShopComponents/StickyBar";
import Products from "./ShopComponents/Products";
import ItemCard from "./ShopComponents/ItemCard";

const Shop = () => {
  const [itemQty, setItemQty] = useState(0);
  const [products, setProducts] = useState(Products()); //Used to store product qty
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
    // products[index].qty = products[index].qty + qty;
  };

  const checkout = () => {
    let productQty = [];
    products.forEach(product => {
      productQty.push({[product.name]: product.qty});      
    });
    modal.classList.add("visible-checkout");
    console.log(productQty);
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
      <div className="hidden-checkout">
        <button
        onClick={() => {
          modal.classList.toggle("visible-checkout");
        }}>Test</button>
      </div>
      <StickyBar itemQty={itemQty} checkout={checkout} />
      <div class="items-display">{cardsArray}</div>
    </div>
  );
};

export default Shop;
