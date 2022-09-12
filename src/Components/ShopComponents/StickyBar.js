import "../../Styles/stickybar.css";

const StickyBar = (props) => {
  return (
    <div class="sticky-bar">
      <div id="shopping-cart">{props.itemQty}</div>
      <button
        onClick={() => {
          props.checkout();
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default StickyBar;
