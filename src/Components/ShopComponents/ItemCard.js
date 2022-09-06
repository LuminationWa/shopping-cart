const ItemCard = (props) => {
  return (
    <div className="item-card" id={props.name}>
      <img src={props.image}></img>
      <p>{props.name}</p>
      <p>Add to cart</p>
      <div class="qty-bar">
        <button>-</button>
        <input type="text"></input>
        <button>+</button>
      </div>
    </div>
  );
};

export default ItemCard;
