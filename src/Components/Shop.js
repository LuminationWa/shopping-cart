import React, { useState, useEffect } from "react";
import "../Styles/shop.css";
import StickyBar from "./ShopComponents/StickyBar";
import Products from "./ShopComponents/Products";
import ItemCard from "./ShopComponents/ItemCard";

const Shop = () => {
  const [itemQty, setItemQty] = useState(0);
  const [products, setProducts] = useState(Products());
  const cardsArray = [];
  products.forEach((product) => {
    cardsArray.push(<ItemCard name={product.name} image={product.image} />);
  });

  return (
    <div class="shop">
      <StickyBar itemQty={itemQty} />
      <div class="items-display">{cardsArray}</div>
    </div>
  );
};

export default Shop;
