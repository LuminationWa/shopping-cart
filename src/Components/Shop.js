import React, { useState, useEffect } from "react";
import "../Styles/shop.css";
import StickyBar from "./ShopComponents/StickyBar";
import Products from "./ShopComponents/Products";
import ItemCard from "./ShopComponents/ItemCard";

const Shop = () => {
  const [itemQty, setItemQty] = useState(0);
  const [products, setProducts] = useState(Products()); //Used to store product qty
  const cardsArray = []; //Used for display

  useEffect(() => {
    // Triggered after updateQty() -> Sums all the quantities -> setItemQty() -> StickyBar updates
    let totalItems = products.reduce(function (acc, obj) { return acc + obj.qty; }, 0);
    setItemQty(totalItems);
  }, [products]);

  const updateQty = (index, qty) => {
    let newArray = [...products];
    newArray[index].qty = products[index].qty + qty;
    setProducts(newArray);
    // products[index].qty = products[index].qty + qty;
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
      <StickyBar itemQty={itemQty} />
      <div class="items-display">{cardsArray}</div>
    </div>
  );
};

export default Shop;
