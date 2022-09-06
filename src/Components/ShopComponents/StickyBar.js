const StickyBar = (props) => {
  return (
    <div class="sticky-bar">
      <p>{props.itemQty}</p>
      <button>Checkout</button>
    </div>
  );
};

export default StickyBar;
