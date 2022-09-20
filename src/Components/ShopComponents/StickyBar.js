import "../../Styles/stickybar.css";

const StickyBar = (props) => {
  return (
    <button
      class="sticky-bar"
      onClick={() => {
        props.checkout();
      }}
    >
      {props.itemQty}
    </button>
  );
};

export default StickyBar;
