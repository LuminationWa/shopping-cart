import React, { useState, useEffect } from "react";
import "../Styles/shop.css";
import StickyBar from "./ShopComponents/StickyBar";
import Products from "./ShopComponents/Products";
import ItemCard from "./ShopComponents/ItemCard";
import Modal from "./ShopComponents/Modal";

const Shop = () => {
  const [totalQty, setTotalQty] = useState(0); //Stores total qty
  const [products, setProducts] = useState(Products()); //Stores all product data
  const cardsArray = []; //Used to store item cards for display

  useEffect(() => {
    // Triggered after updateQty() -> Sums all the quantities -> setItemQty() -> StickyBar updates
    let totalItems = products.reduce(function (acc, obj) {
      return acc + obj.qty;
    }, 0);
    setTotalQty(totalItems);
  }, [products]);

  const updateQty = (index, qty) => {
    // Triggered when add to cart btn is clicked, updates the quantities of the products array -> UseEffect
    let newArray = [...products];
    newArray[index].qty = products[index].qty + qty;
    setProducts(newArray);
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
      <Modal products={products} />
      <StickyBar totalQty={totalQty} />
      <div class="items-display">{cardsArray}</div>
    </div>
  );
};

export default Shop;
